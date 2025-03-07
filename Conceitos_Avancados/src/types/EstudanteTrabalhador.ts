
// Definição do tipo Estudante
type Estudante = {
    nome: string;
    curso: string;
};

// Definição do tipo Trabalhador
type Trabalhador = {
    empresa: string;
    cargo: string;
};

// Intersection Type unindo Estudante e Trabalhador
export type EstudanteTrabalhador = Estudante & Trabalhador;
