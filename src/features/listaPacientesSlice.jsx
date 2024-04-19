import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pacientes: [
        {
          "nome": "João Silva",
          "telefone": "(11) 91234-5678",
          "cpf": "123.456.789-00",
          "endereco": "Rua das Flores, 123",
          "cidade": "São Paulo",
          "alergias": ["Penicilina", "Amendoim"],
          "responsavel": "987.654.321-00",
          "medicacoes": ["Paracetamol"],
          "cirurgias": ["Cirurgia de apendicite"]
        },
        {
          "nome": "Maria Souza",
          "telefone": "(11) 98765-4321",
          "cpf": "987.654.321-00",
          "endereco": "Avenida dos Passarinhos, 456",
          "cidade": "Rio de Janeiro",
          "alergias": [],
          "responsavel": null,
          "medicacoes": [],
          "cirurgias": []
        },
        {
          "nome": "Carlos Oliveira",
          "telefone": "(21) 98765-1234",
          "cpf": "456.789.123-00",
          "endereco": "Rua das Pedras, 789",
          "cidade": "Belo Horizonte",
          "alergias": ["Glúten"],
          "responsavel": null,
          "medicacoes": ["Dipirona"],
          "cirurgias": ["Cirurgia de catarata"]
        },
        {
          "nome": "Ana Santos",
          "telefone": "(31) 98765-4321",
          "cpf": "987.123.456-00",
          "endereco": "Avenida das Palmeiras, 321",
          "cidade": "Salvador",
          "alergias": ["Lactose"],
          "responsavel": "987.654.321-00",
          "medicacoes": ["Omeprazol"],
          "cirurgias": ["Cirurgia de hérnia"]
        },
        {
          "nome": "Mariana Costa",
          "telefone": "(41) 98765-1234",
          "cpf": "789.456.123-00",
          "endereco": "Rua das Árvores, 456",
          "cidade": "Curitiba",
          "alergias": ["Frutos do mar"],
          "responsavel": null,
          "medicacoes": ["Ranitidina"],
          "cirurgias": ["Cirurgia de joelho"]
        },
        {
          "nome": "José Lima",
          "telefone": "(51) 98765-4321",
          "cpf": "123.789.456-00",
          "endereco": "Avenida das Montanhas, 789",
          "cidade": "Porto Alegre",
          "alergias": [],
          "responsavel": "456.123.789-00",
          "medicacoes": [],
          "cirurgias": []
        },
        {
          "nome": "Carolina Pereira",
          "telefone": "(61) 98765-1234",
          "cpf": "456.123.789-00",
          "endereco": "Rua das Pedrinhas, 123",
          "cidade": "Brasília",
          "alergias": [],
          "responsavel": null,
          "medicacoes": [],
          "cirurgias": []
        },
        {
          "nome": "Rafaela Fernandes",
          "telefone": "(71) 98765-4321",
          "cpf": "789.123.456-00",
          "endereco": "Avenida das Flores, 987",
          "cidade": "Fortaleza",
          "alergias": [],
          "responsavel": "789.456.123-00",
          "medicacoes": [],
          "cirurgias": []
        },
        {
          "nome": "Lucas Almeida",
          "telefone": "(81) 98765-1234",
          "cpf": "321.789.456-00",
          "endereco": "Rua dos Coqueiros, 987",
          "cidade": "Recife",
          "alergias": [],
          "responsavel": null,
          "medicacoes": [],
          "cirurgias": []
        },
        {
          "nome": "Gabriela Machado",
          "telefone": "(91) 98765-4321",
          "cpf": "654.321.987-00",
          "endereco": "Avenida das Estrelas, 654",
          "cidade": "Belém",
          "alergias": ["Pólen"],
          "responsavel": "789.123.456-00",
          "medicacoes": ["Losartana"],
          "cirurgias": ["Cirurgia de vesícula"]
        },
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