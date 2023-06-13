'use client';

import { Checkbox } from '@mui/material';
import { createContext, useContext, useMemo, useState } from 'react';

interface Node {
  value: string;
  label: string;
  children?: Node[];
}

interface filterTreeProps {
  nodes: Node[];
  parentChecked?: boolean;
}

interface TreeContext {
  checkedNodesValue: string[];
  onFilterNodes: (nodeValue: string) => void;
}

const filterTreeContext = createContext<TreeContext>({
  checkedNodesValue: [],
  onFilterNodes: () => {
    return;
  },
});

const nodes = [
  {
    value: 'mars',
    label: 'Mars',
    children: [
      { value: 'phobos', label: 'Phobos' },
      { value: 'deimos', label: 'Deimos' },
    ],
  },
  {
    value: 'earth',
    label: 'Earth',
    children: [
      {
        value: 'USA',
        label: 'USA',
        children: [
          { value: 'newyork', label: 'New' },
          { value: 'sanfran', label: 'San' },
          { value: 'cali', label: 'California' },
        ],
      },
      { value: 'China', label: 'China' },
    ],
  },
];

const ProductListPage = () => {
  const [checkedList, setCheckedList] = useState(['USA', 'newyork', 'sanfran']);

  const onFilterClick = (nodeValue: string) => {
    const node = findItem(nodes, nodeValue);

    if (!node) return;

    const findParentResult = findParents(
      nodes,
      nodeValue,
      undefined,
      checkedList
    );

    if (!findParentResult) return;

    const { parents, lastUncheckedChildren } = findParentResult;

    if (!parents) return;
    const flattenedChildNode = flattenedChildNodeValue(node);

    setCheckedList((prevCheckList) => {
      const isChecked = prevCheckList.includes(nodeValue);

      let newCheckList = [...prevCheckList];

      const unCheckChildren = () => {
        newCheckList = newCheckList.filter(
          (value) => !flattenedChildNode.includes(value)
        );
      };

      const unCheckParents = () => {
        newCheckList = newCheckList.filter((value) => !parents.includes(value));
      };

      const checkParents = () => {
        lastUncheckedChildren
          .slice()
          .reverse()
          .forEach(([value, parentValue]) => {
            if (newCheckList.includes(value))
              newCheckList = [...newCheckList, parentValue];
          });
      };

      if (isChecked) {
        unCheckChildren();
        unCheckParents();
        newCheckList = newCheckList.filter((value) => value !== nodeValue);
      } else {
        newCheckList = [...newCheckList, nodeValue, ...flattenedChildNode];
        checkParents();
      }

      return Array.from(new Set(newCheckList));
    });
  };

  return (
    <div>
      <filterTreeContext.Provider
        value={{ checkedNodesValue: checkedList, onFilterNodes: onFilterClick }}
      >
        <FilterTree nodes={nodes} />
        <ProductList />
      </filterTreeContext.Provider>
    </div>
  );
};
export default ProductListPage;

const ProductList = () => {
  const { checkedNodesValue } = useContext(filterTreeContext);

  return <>{checkedNodesValue.toString()}</>;
};

const FilterTree = ({ nodes }: filterTreeProps) => {
  return (
    <ul className="tw-list-none tw-p-0">
      {nodes.map((node) => (
        <FilterNode node={node} key={node.value} />
      ))}
    </ul>
  );
};

const flattenedChildNodeValue = (node: Node) => {
  if (node.children === undefined) return [];

  let flattenNode: string[] =
    [...node.children.map((child) => child.value)] || [];

  node.children.forEach(
    (child) =>
      (flattenNode = [...flattenNode, ...flattenedChildNodeValue(child)])
  );

  return flattenNode;
};

const findItem = (items: Node[], targetId: string): Node | undefined => {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.value === targetId) {
      return item;
    }
    if (item.children) {
      const found = findItem(item.children, targetId);
      if (found) {
        return found;
      }
    }
  }
};

const findParents = (
  tree: Node[],
  targetValue: string,
  parents: string[] = [],
  checkedList: string[],
  lastUncheckedChildren: [string, string][] = []
):
  | { parents: string[] | undefined; lastUncheckedChildren: [string, string][] }
  | undefined => {
  const haveOneUncheckedChild =
    tree
      .map((node) => node.value)
      .filter((value) => !checkedList.includes(value)).length === 1;

  for (const node of tree) {
    if (
      haveOneUncheckedChild &&
      !checkedList.includes(node.value) &&
      parents.length > 0
    )
      lastUncheckedChildren.push([node.value, parents.slice(-1)[0]]);

    if (node.value === targetValue) {
      return { parents, lastUncheckedChildren };
    }

    if (node.children) {
      const foundParents = findParents(
        node.children,
        targetValue,
        [...parents, node.value],
        checkedList,
        lastUncheckedChildren
      );
      if (foundParents) {
        return foundParents;
      }
    }
  }

  return undefined;
};

const FilterNode = ({ node }: { node: Node }) => {
  const { value, children, label } = node;

  const { checkedNodesValue, onFilterNodes } = useContext(filterTreeContext);

  const flattenedChildNode = useMemo(
    () => flattenedChildNodeValue(node),
    [node]
  );

  const nodeChecked = checkedNodesValue.includes(value);

  const childNodeChecked =
    flattenedChildNode.filter((value) => checkedNodesValue.includes(value))
      .length > 0;

  const [expand, setExpand] = useState(childNodeChecked || nodeChecked);

  return (
    <li key={value} className="tw-pl-4">
      <span className="tw-flex tw-items-center">
        <Checkbox
          id={value}
          checked={nodeChecked}
          onChange={(e) => {
            setExpand(e.target.checked);
            onFilterNodes(e.target.id);
          }}
          indeterminate={childNodeChecked && !nodeChecked}
        />
        <label onClick={() => setExpand((prev) => !prev)}>{label}</label>
      </span>
      {children && expand && <FilterTree nodes={children} />}
    </li>
  );
};
