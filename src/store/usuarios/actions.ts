
// LOGA UM USUÁRIO
export const rdLogar = (usuario: any) => { return {type: 'GRAVAR', payload: {usuario}}};
export const rdAtualizarUsuario= (usuario: any) => { return {type: 'GRAVAR', payload: {usuario}}};
// DESLOGA O USUáRIO
export const rdDeslogar = () => { return { type: 'LIBERAR'} }