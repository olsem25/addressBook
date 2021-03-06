export interface ISetActiveContactId
  extends ReturnType<typeof setActiveContactId> {}

export const setActiveContactId = (id: string) => ({
  type: 'SET_ACTIVE_CONTACT_ID' as const,
  id,
});
