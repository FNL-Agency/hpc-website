import * as React from 'react'
import { Body, Container, Head, Heading, Hr, Html, Preview, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  name?: string
  email?: string
  company?: string
}

const Email = ({ name, email, company }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New book-a-call request from {name ?? 'a visitor'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>New call request</Heading>
        <Text style={text}>Someone submitted the Book a Call form on the HPC website.</Text>
        <Hr style={hr} />
        <Text style={text}><strong>Name:</strong> {name ?? '—'}</Text>
        <Text style={text}><strong>Email:</strong> {email ?? '—'}</Text>
        <Text style={text}><strong>Company:</strong> {company ?? '—'}</Text>
        <Hr style={hr} />
        <Text style={footer}>HPC — Capital campaigns for small to mid-sized nonprofits.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data: Record<string, any>) =>
    `Book a call: ${data['name'] ?? 'New request'}`,
  displayName: 'Book a Call request',
  previewData: { name: 'Jane Doe', email: 'jane@example.org', company: 'Example Nonprofit' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px 28px' }
const heading = { color: '#00629E', fontSize: '22px' }
const text = { fontSize: '15px', lineHeight: '1.5', color: '#1a1a1a' }
const hr = { borderColor: '#e5e5e5', margin: '16px 0' }
const footer = { fontSize: '12px', color: '#6b6b6b' }
