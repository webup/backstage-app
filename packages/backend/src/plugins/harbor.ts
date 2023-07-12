import { Router } from 'express'

import { createRouter } from '@bestsellerit/backstage-plugin-harbor-backend'

import { PluginEnvironment } from '../types'

export default async function createPlugin({
  logger,
  config,
}: PluginEnvironment): Promise<Router> {
  return await createRouter({ logger, config })
}