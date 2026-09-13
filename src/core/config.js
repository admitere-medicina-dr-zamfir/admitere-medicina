/**
 * Atlas BioChem / BioBank
 * Configurația centrală a platformei
 */

const ATLAS_CONFIG = {
  app: {
    name: "Atlas",
    fullName: "Atlas BioChem & BioBank",
    author: "Dr. Alexandru Lucian Zamfir",
    version: "0.1.0"
  },

  modules: {
    biology: {
      name: "Atlas BioBank",
      enabled: true
    },

    chemistry: {
      name: "Atlas BioChem",
      enabled: true
    },

    simulations: {
      name: "Simulări Admitere",
      enabled: true
    }
  },

  simulation: {
    defaultQuestions: 100,
    defaultDurationMinutes: 150
  }
};

export default ATLAS_CONFIG;