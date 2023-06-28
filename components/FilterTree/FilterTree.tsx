'use client';

import { Checkbox } from '@mui/material';
import { createContext, useContext, useMemo, useState, useEffect } from 'react';
import {
  findItem,
  findParents,
  flattenedChildNodeValue,
} from './checkbox-tree-helpers';

export interface Node {
  value: string;
  label: string;
  children?: Node[];
}

interface FilterBranchProps {
  nodes: Node[];
  parentChecked?: boolean;
}

interface FilterTreeProps<T> {
  nodes: T[];
  initialCheckedList?: string[];
  onChecked: (checkedList: string[]) => void;
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

const FilterTree = <T extends Node>({
  nodes,
  onChecked,
  initialCheckedList,
}: FilterTreeProps<T>) => {
  const [checkedList, setCheckedList] = useState(initialCheckedList || []);

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

  useEffect(() => {
    console.log('checkedList', checkedList);
    onChecked(checkedList);
  }, [checkedList]);

  return (
    <div>
      <filterTreeContext.Provider
        value={{ checkedNodesValue: checkedList, onFilterNodes: onFilterClick }}
      >
        <FilterBranch nodes={nodes} />
      </filterTreeContext.Provider>
    </div>
  );
};
export default FilterTree;

const FilterBranch = ({ nodes }: FilterBranchProps) => {
  return (
    <ul className="tw-list-none tw-p-0">
      {nodes.map((node) => (
        <FilterNode node={node} key={node.value} />
      ))}
    </ul>
  );
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
      {children && expand && <FilterBranch nodes={children} />}
    </li>
  );
};
