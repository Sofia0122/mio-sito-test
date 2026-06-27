import { portsMock } from '../mocks/ports.mock'

export async function listPorts() {
  return [...portsMock]
}
