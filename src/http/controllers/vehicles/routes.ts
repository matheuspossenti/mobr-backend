import type { FastifyInstance } from 'fastify'
import { showAll } from './show-all'
import { create } from './create'
import { showByUuid } from './show-by-id'
import { update } from './update'

export async function vehicleRoutes(app: FastifyInstance) {
  app.post('/', create)
  app.get('/', showAll)
  app.get('/:uuid', showByUuid)
  app.put('/:uuid', update)
}
