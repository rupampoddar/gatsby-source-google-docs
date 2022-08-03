import {GoogleDocument} from "../utils/google-document"

export function convertToMarkdown(documentTexts) {
  const options = {keepDefaultStyle: true}
  const googleDocument = new GoogleDocument({document: documentTexts, options})
  return googleDocument.toMarkdown()
}
