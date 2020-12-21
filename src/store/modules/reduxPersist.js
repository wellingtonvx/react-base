// Configuração do Redux Persist para salvar os dados do token na aplicação
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'NOME_DO_PROJETO',
      storage,
      whitelist: ['exampleReducer'],
    },
    reducers
  );

  return persistedReducers;
};
