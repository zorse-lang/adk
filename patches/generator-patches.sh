#! /usr/bin/env bash

cd $(dirname $0)/..

GDM_APP_FILE="git_modules/gdm-generator-util/src/app.ts"
CFN_GENSPEC_FILE="git_modules/cfn-generator-util/tools/@aws-cdk/cfn2ts/lib/genspec.ts"
CFN_GENSPEC_NEEDLE="if ('PrimitiveType' in spec && spec.PrimitiveType === 'String') {"

# check if we applied the patch previously and if "TypescriptTextWriterUnused" is found
PATCHED=$(cat ${GDM_APP_FILE} | grep 'TypescriptTextWriterUnused')

# if PATCHED is empty, then the patch has not been applied
if [ -z "$PATCHED" ]; then
  echo "Patching google-api-typings-generator"
  sed -i "s@class TypescriptTextWriter@class TypescriptTextWriterUnused@g" ${GDM_APP_FILE}
  sed -i "s@const irregularSpaces@export {irregularSpaces}\nconst irregularSpaces@g" ${GDM_APP_FILE}
  sed -i "s@const jsdocComment@export {jsdocComment}\nconst jsdocComment@g" ${GDM_APP_FILE}
  sed -i "s@type TypescriptWriterCallback@export {TypescriptWriterCallback}\ntype TypescriptWriterCallback@g" ${GDM_APP_FILE}
  sed -i "s@function formatPropertyName@export {formatPropertyName}\nfunction formatPropertyName@g" ${GDM_APP_FILE}
  sed -i "s@function isEmptySchema@export {isEmptySchema}\nfunction isEmptySchema@g" ${GDM_APP_FILE}
  sed -i "s@function getType@export {getType}\nfunction getType@g" ${GDM_APP_FILE}
  sed -i "s@class IndentedTextWriter@export {IndentedTextWriter}\nclass IndentedTextWriter@g" ${GDM_APP_FILE}
  sed -i "s@'Alexa'@'Alexa', 'ALIYUN'@g" ${CFN_GENSPEC_FILE}
  sed -i -e "/${CFN_GENSPEC_NEEDLE}/ r patches/genspec-snippet.ts" -e "s/${CFN_GENSPEC_NEEDLE}//" ${CFN_GENSPEC_FILE}
fi
