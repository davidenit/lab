import { Node } from './FilterTree';

export const flattenedChildNodeValue = (node: Node) => {
  if (node.children === undefined) return [];

  let flattenNode: string[] =
    [...node.children.map((child) => child.value)] || [];

  node.children.forEach(
    (child) =>
      (flattenNode = [...flattenNode, ...flattenedChildNodeValue(child)])
  );

  return flattenNode;
};

export const findItem = (items: Node[], targetId: string): Node | undefined => {
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

export const findParents = (
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
