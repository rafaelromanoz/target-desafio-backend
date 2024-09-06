// Tabelas e Campos
// Clientes

// id_cliente (PK)
// razao_social
// id_estado (FK)
// Estados

// id_estado (PK)
// nome_estado
// sigla_estado
// Telefones

// id_telefone (PK)
// id_cliente (FK)
// id_tipo_telefone (FK)
// numero_telefone
// Tipos_Telefone

// id_tipo_telefone (PK)
// descricao_tipo
// Relacionamentos
// Clientes -> Estados (1:N) - Um cliente pertence a um estado, um estado pode ter vários clientes.
// Clientes -> Telefones (1:N) - Um cliente pode ter vários telefones, um telefone pertence a um cliente.
// Telefones -> Tipos_Telefone (1:N) - Um telefone tem um tipo, um tipo pode ser associado a vários telefones.
// Diagrama
// Clientes     Estados
// +------------+---------+
// | id_cliente |         |
// | razao_social|         |
// | id_estado  |---------+
// +------------+         |
//                        | id_estado
//                        | nome_estado
//                        | sigla_estado
//                        +---------+


// Telefones    Tipos_Telefone
// +------------+----------------+
// | id_telefone|                |
// | id_cliente |----------------+
// | id_tipo_telefone|                |
// | numero_telefone |                |
// +------------+                | id_tipo_telefone
//                              | descricao_tipo
//                              +----------------+
// Consulta SQL
// SQL
// SELECT c.id_cliente, c.razao_social, t.numero_telefone
// FROM Clientes c
// JOIN Estados e ON c.id_estado = e.id_estado
// JOIN Telefones t ON c.id_cliente = t.id_cliente
// WHERE e.sigla_estado = 'SP';