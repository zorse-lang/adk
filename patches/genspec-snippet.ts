  if (Object.keys(spec).length === 1 && 'Description' in spec) {
    attrType = 'any';
  } else if ('PrimitiveType' in spec && spec.PrimitiveType === 'Boolean') {
    attrType = 'boolean';
  } else if ('PrimitiveType' in spec && spec.PrimitiveType === 'Json') {
    attrType = 'any';
  } else if ('PrimitiveType' in spec && spec.PrimitiveType === 'Double') {
    attrType = 'number';
  } else if ('Type' in spec && 'PrimitiveItemType' in spec && spec.Type === 'List' && spec.PrimitiveItemType === 'Json') {
    attrType = 'any[]';
  } else if ('Type' in spec && 'PrimitiveItemType' in spec && spec.Type === 'Map' && spec.PrimitiveItemType === 'String') {
    attrType = 'Map<string, string>';
  } else if ('PrimitiveType' in spec && spec.PrimitiveType === 'String') {
