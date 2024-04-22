import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pacientes: [
        {
            "nome": "Edmundo Silva",
            "telefone": "(11) 1234-5678",
            "cpf": "123.456.789-00",
            "endereco": "Rua Vasco da Gama, 123",
            "cidade": "Rio de Janeiro",
            "alergias": [],
            "responsavel": "111.222.333-44",
            "medicacoes": [],
            "cirurgias": []
          },
          {
            "nome": "Romário Oliveira",
            "telefone": "(11) 2345-6789",
            "cpf": "234.567.890-11",
            "endereco": "Avenida São Januário, 456",
            "cidade": "São Januário",
            "alergias": ["Penicilina"],
            "responsavel": "222.333.444-55",
            "medicacoes": ["Aspirina"],
            "cirurgias": ["Apêndice"]
          },
          {
            "nome": "Roberto Dinamite Santos",
            "telefone": "(11) 3456-7890",
            "cpf": "345.678.901-22",
            "endereco": "Travessa da Colina, 789",
            "cidade": "Colina",
            "alergias": ["Sulfa"],
            "responsavel": "333.444.555-66",
            "medicacoes": ["Paracetamol"],
            "cirurgias": ["Joelho"]
          },
          {
            "nome": "Juninho Pernambucano Lima",
            "telefone": "(11) 4567-8901",
            "cpf": "456.789.012-33",
            "endereco": "Rua dos Gigantes, 1011",
            "cidade": "Gigantão",
            "alergias": ["Amendoim"],
            "responsavel": "444.555.666-77",
            "medicacoes": ["Ibuprofeno"],
            "cirurgias": ["Nariz"]
          },
          {
            "nome": "Bellini Costa",
            "telefone": "(11) 5678-9012",
            "cpf": "567.890.123-44",
            "endereco": "Praça da Glória, 1213",
            "cidade": "Glória",
            "alergias": ["Frutos do mar"],
            "responsavel": "555.666.777-88",
            "medicacoes": ["Omeprazol"],
            "cirurgias": ["Ombro"]
          }
      ],
};

const listaPacientesSlice = createSlice({
    name: "pacientes",
    initialState,
    reducers: {
        adicionarPaciente: (state, action) => {
            state.pacientes = [...state.pacientes, action.payload];
        }
    }
});

export const { adicionarPaciente } = listaPacientesSlice.actions;
export default listaPacientesSlice.reducer;