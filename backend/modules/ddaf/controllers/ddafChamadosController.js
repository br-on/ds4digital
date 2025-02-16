// backend/modules/ddaf/controllers/ddafChamadosController.js
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

// Cria a conexão com o Supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

// Função para pegar todos os chamados
const getChamados = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('ddaf-chamados')
      .select('*');

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.json(data);
  } catch (error) {
    console.error("Erro ao buscar chamados:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
};

// Função para criar um novo chamado
const createChamado = async (req, res) => {
  const { titulo, descricao, status } = req.body;

  try {
    const { data, error } = await supabase
      .from('ddaf-chamados')
      .insert([{ titulo, descricao, status }]);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.json(data);
  } catch (error) {
    console.error("Erro ao criar chamado:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
};

// Exporta as funções para serem usadas nas rotas
module.exports = {
  getChamados,
  createChamado,
};
