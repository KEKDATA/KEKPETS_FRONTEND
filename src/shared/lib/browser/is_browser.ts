/**
 * Данный хелпер необходим в момент работы Gatsby
 * Есть подозрение, что код прогоняется вне DOM APi
 */
export const isBrowser = typeof window !== 'undefined';
