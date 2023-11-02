import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from "./schemas"
import { sanity } from '@/config'
import { codeInput } from '@sanity/code-input'
import structure from './desk'
import { visionTool } from '@sanity/vision'

const config = defineConfig({
  projectId: sanity.projectId,
  dataset: sanity.dataset,
  title: sanity.title,
  apiVersion: sanity.apiVersion,
  basePath: "/studio",
  plugins: [deskTool({structure}), codeInput(), visionTool()],
  schema: { types: schemas }
})

export default config