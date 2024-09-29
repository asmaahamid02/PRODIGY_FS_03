//eslint-disable-next-line
export const validateRequiredFields = (body: any, fields: string[]) => {
  fields.forEach((field) => {
    if (!body[field]) {
      throw new Error(`${field} is required`)
    }
  })
}
