export interface MessageTemplate {
  message: string
  prefix?: string
  suffix?: string
  uppercase: boolean
}

export function renderMessageTemplate(template: MessageTemplate): string {
  const fragments = [template.prefix, template.message, template.suffix].filter(
    (fragment): fragment is string => typeof fragment === 'string',
  )

  const rendered = fragments.join(' ')

  return template.uppercase ? rendered.toUpperCase() : rendered
}
