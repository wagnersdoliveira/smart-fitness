import React, { useEffect, useMemo, useState } from "react";
import "./NutriFit.css";

const recipes = {
  panqueca: {
    title: "Panqueca proteica de banana",
    category: "Café da manhã",
    protein: 35,
    ingredients: ["3 ovos", "60 g de aveia", "1 banana", "250 ml de leite"],
    preparation: "Amasse a banana, misture com os ovos e a aveia. Prepare em uma frigideira antiaderente. Sirva com o leite."
  },
  omelete: {
    title: "Omelete com pão integral",
    category: "Café da manhã",
    protein: 33,
    ingredients: ["3 ovos", "2 fatias de pão integral", "250 ml de leite", "1 fruta"],
    preparation: "Bata os ovos, tempere e prepare a omelete. Sirva com o pão e o leite."
  },
  mingau: {
    title: "Mingau de aveia com ovos",
    category: "Café da manhã",
    protein: 35,
    ingredients: ["250 ml de leite", "60 g de aveia", "3 ovos", "1 banana"],
    preparation: "Cozinhe a aveia com leite até engrossar. Sirva com banana e ovos mexidos."
  },
  ovosAveia: {
    title: "Ovos mexidos com aveia",
    category: "Café da manhã",
    protein: 38,
    ingredients: ["4 ovos", "50 g de aveia", "200 ml de leite"],
    preparation: "Prepare os ovos mexidos e sirva com a aveia e o leite."
  },
  lancheAmendoim: {
    title: "Leite com amendoim",
    category: "Lanche",
    protein: 16,
    ingredients: ["250 ml de leite", "30 g de amendoim"],
    preparation: "Sirva o leite com o amendoim torrado sem excesso de sal."
  },
  lancheAmendoim2: {
    title: "Leite com amendoim",
    category: "Lanche",
    protein: 13,
    ingredients: ["250 ml de leite", "20 g de amendoim"],
    preparation: "Sirva o leite com o amendoim."
  },
  frango: {
    title: "Frango com arroz e feijão",
    category: "Almoço",
    protein: 67,
    ingredients: ["180 g de peito de frango", "150 g de arroz cozido", "120 g de feijão cozido", "Salada à vontade"],
    preparation: "Grelhe o frango com alho e temperos. Sirva com arroz, feijão e salada."
  },
  carne: {
    title: "Carne moída com arroz e feijão",
    category: "Almoço",
    protein: 64,
    ingredients: ["200 g de carne moída magra", "150 g de arroz cozido", "120 g de feijão cozido", "Salada"],
    preparation: "Refogue a carne com cebola, alho e tomate. Sirva com arroz, feijão e salada."
  },
  frangoBatata: {
    title: "Frango com batata-doce",
    category: "Almoço",
    protein: 57,
    ingredients: ["180 g de frango", "200 g de batata-doce", "100 g de feijão", "Brócolis"],
    preparation: "Grelhe o frango, cozinhe a batata-doce e o brócolis. Sirva com feijão."
  },
  ovosBanana: {
    title: "Ovos cozidos com banana",
    category: "Pré-treino",
    protein: 13,
    ingredients: ["2 ovos", "1 banana"],
    preparation: "Cozinhe os ovos e sirva com a banana."
  },
  ovosBanana3: {
    title: "Ovos cozidos com banana",
    category: "Pré-treino",
    protein: 19,
    ingredients: ["3 ovos", "1 banana"],
    preparation: "Cozinhe os ovos e sirva com a banana."
  },
  sanduiche: {
    title: "Sanduíche de ovos",
    category: "Pré-treino",
    protein: 19,
    ingredients: ["2 ovos", "2 fatias de pão integral"],
    preparation: "Cozinhe ou mexa os ovos e monte o sanduíche."
  },
  sardinha: {
    title: "Sardinha com batata",
    category: "Jantar",
    protein: 46,
    ingredients: ["2 latas de sardinha drenada", "200 g de batata cozida", "Legumes"],
    preparation: "Cozinhe a batata e aqueça a sardinha com tomate e cebola. Sirva com legumes."
  },
  soja: {
    title: "Proteína de soja refogada",
    category: "Jantar",
    protein: 43,
    ingredients: ["70 g de proteína de soja seca", "150 g de feijão", "100 g de arroz", "Tomate e cebola"],
    preparation: "Hidrate a soja, escorra e refogue com alho, cebola e tomate. Sirva com arroz e feijão."
  },
  frangoJantar: {
    title: "Frango desfiado com arroz",
    category: "Jantar",
    protein: 60,
    ingredients: ["180 g de frango", "150 g de arroz cozido", "Legumes"],
    preparation: "Cozinhe e desfie o frango. Refogue com temperos e sirva com arroz e legumes."
  },
  macarrao: {
    title: "Macarrão com sardinha",
    category: "Jantar",
    protein: 48,
    ingredients: ["2 latas de sardinha drenada", "150 g de macarrão cozido", "Molho de tomate"],
    preparation: "Cozinhe o macarrão. Prepare um molho com tomate e sardinha e misture."
  },
  lancheOvos: {
    title: "Ovos cozidos e fruta",
    category: "Lanche",
    protein: 13,
    ingredients: ["2 ovos", "1 fruta"],
    preparation: "Cozinhe os ovos e sirva com uma fruta."
  },
  omeleteSoja: {
    title: "Omelete reforçada com soja",
    category: "Jantar",
    protein: 42,
    ingredients: ["4 ovos", "50 g de proteína de soja seca", "Tomate e cebola", "Legumes"],
    preparation: "Hidrate a soja e refogue. Prepare a omelete e recheie com a soja e os vegetais."
  },
  carneBatata: {
    title: "Carne moída com batata-doce",
    category: "Almoço",
    protein: 57,
    ingredients: ["180 g de carne moída magra", "200 g de batata-doce", "100 g de feijão", "Brócolis"],
    preparation: "Refogue a carne, cozinhe a batata-doce e prepare os legumes."
  },
  omelete4: {
    title: "Omelete de quatro ovos",
    category: "Jantar",
    protein: 25,
    ingredients: ["4 ovos", "Tomate", "Cebola", "Legumes"],
    preparation: "Bata os ovos, adicione os vegetais e cozinhe em frigideira antiaderente."
  },
  frangoBatataJantar: {
    title: "Frango com batata-doce",
    category: "Jantar",
    protein: 60,
    ingredients: ["180 g de frango", "200 g de batata-doce", "Legumes"],
    preparation: "Grelhe o frango e sirva com batata-doce cozida e legumes."
  }
};

const days = [
  { name: "Segunda", meals: ["panqueca", "lancheAmendoim", "frango", "ovosBanana", "frangoJantar"] },
  { name: "Terça", meals: ["omelete", "lancheAmendoim2", "carne", "ovosBanana3", "sardinha"] },
  { name: "Quarta", meals: ["mingau", "lancheAmendoim", "frango", "sanduiche", "soja"] },
  { name: "Quinta", meals: ["ovosAveia", "lancheAmendoim2", "carneBatata", "sanduiche", "frangoJantar"] },
  { name: "Sexta", meals: ["panqueca", "lancheAmendoim", "frango", "ovosBanana", "macarrao"] },
  { name: "Sábado", meals: ["omelete", "lancheAmendoim", "frango", "lancheOvos", "omeleteSoja"] },
  { name: "Domingo", meals: ["mingau", "lancheAmendoim2", "carne", "ovosBanana3", "frangoBatataJantar"] }
];

const shoppingGroups = [
  {
    title: "Proteínas e laticínios",
    items: [
      "1,6 kg de peito de frango cru",
      "500 g de carne moída magra",
      "4 latas de sardinha",
      "500 g de proteína de soja",
      "42 ovos",
      "3,5 litros de leite"
    ]
  },
  {
    title: "Carboidratos",
    items: [
      "500 g de arroz cru",
      "500 g de feijão cru",
      "500 g de aveia",
      "1 pacote de pão integral",
      "250 g de macarrão",
      "500 g de batata-doce",
      "500 g de batata comum"
    ]
  },
  {
    title: "Frutas, verduras e complementos",
    items: [
      "10 bananas",
      "7 frutas variadas",
      "200 g de amendoim",
      "1 kg de legumes variados",
      "1 maço de folhas para salada",
      "Tomate, cebola, alho e limão",
      "Azeite e temperos"
    ]
  }
];

const initialProfile = {
  name: "",
  weight: 110,
  height: 190,
  age: 34,
  goal: "Ganhar massa muscular",
  trainingDays: 5
};

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

export default function NutriFit() {
  const [profile, setProfile] = useState(() =>
    readStorage("nutrifit-profile", initialProfile)
  );

  const [selectedDay, setSelectedDay] = useState(0);
  const [completed, setCompleted] = useState(() =>
    readStorage("nutrifit-completed", {})
  );
  const [shopping, setShopping] = useState(() =>
    readStorage("nutrifit-shopping", [])
  );
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    localStorage.setItem("nutrifit-profile", JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem("nutrifit-completed", JSON.stringify(completed));
  }, [completed]);

  useEffect(() => {
    localStorage.setItem("nutrifit-shopping", JSON.stringify(shopping));
  }, [shopping]);

  const currentDay = days[selectedDay];

  const dailyProtein = useMemo(
    () => currentDay.meals.reduce((total, key) => total + recipes[key].protein, 0),
    [currentDay]
  );

  const completedCount = currentDay.meals.filter(
    (_, index) => completed[`${selectedDay}-${index}`]
  ).length;

  const weekCompleted = days.reduce(
    (total, day, dayIndex) =>
      total +
      day.meals.filter((_, mealIndex) => completed[`${dayIndex}-${mealIndex}`]).length,
    0
  );

  const proteinTarget = Math.round(Number(profile.weight || 110) * 1.7);

  function toggleMeal(dayIndex, mealIndex) {
    const key = `${dayIndex}-${mealIndex}`;
    setCompleted(previous => ({
      ...previous,
      [key]: !previous[key]
    }));
  }

  function toggleShopping(item) {
    setShopping(previous =>
      previous.includes(item)
        ? previous.filter(value => value !== item)
        : [...previous, item]
    );
  }

  function resetWeek() {
    if (window.confirm("Deseja reiniciar o progresso das refeições?")) {
      setCompleted({});
    }
  }

  function exportShopping() {
    const items = shoppingGroups.flatMap(group => [
      group.title,
      ...group.items.map(item => `${shopping.includes(item) ? "[x]" : "[ ]"} ${item}`),
      ""
    ]);
    const blob = new Blob([items.join("\n")], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "lista-de-compras-nutrifit.txt";
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <main className="nf-app">
      <header className="nf-header">
        <div className="nf-brand">
          <div className="nf-logo">N</div>
          <div>
            <strong>NUTRIFIT</strong>
            <small>Seu planejamento alimentar</small>
          </div>
        </div>
        <button className="nf-profile-button" onClick={() => setShowProfile(true)}>
          <span>♙</span> Meu perfil
        </button>
      </header>

      <section className="nf-hero">
        <div>
          <span className="nf-eyebrow">PLANEJAMENTO INTELIGENTE</span>
          <h1>Sua alimentação.<br />Sua evolução.</h1>
          <p>Organize suas refeições, acompanhe proteínas e mantenha o foco na academia.</p>
          <button onClick={() => setActiveTab("menu")} className="nf-primary">
            Ver meu cardápio →
          </button>
        </div>
        <div className="nf-hero-symbol">🥗</div>
      </section>

      <nav className="nf-tabs">
        {[
          ["dashboard", "⌂", "Visão geral"],
          ["menu", "☷", "Cardápio"],
          ["shopping", "🛒", "Compras"]
        ].map(([id, icon, label]) => (
          <button
            key={id}
            className={activeTab === id ? "active" : ""}
            onClick={() => setActiveTab(id)}
          >
            <span>{icon}</span> {label}
          </button>
        ))}
      </nav>

      {activeTab === "dashboard" && (
        <>
          <section className="nf-section-heading">
            <div>
              <span className="nf-eyebrow">SEU RESUMO</span>
              <h2>Visão geral</h2>
            </div>
            <span className="nf-status">● Plano ativo</span>
          </section>

          <section className="nf-stats">
            <article className="nf-stat">
              <span>⚖ Peso atual</span>
              <strong>{profile.weight} <small>kg</small></strong>
            </article>
            <article className="nf-stat">
              <span>🎯 Meta diária</span>
              <strong>{proteinTarget} <small>g proteína</small></strong>
            </article>
            <article className="nf-stat">
              <span>🏋 Treinos semanais</span>
              <strong>{profile.trainingDays} <small>dias</small></strong>
            </article>
          </section>

          <section className="nf-panel">
            <div className="nf-panel-heading">
              <div>
                <span className="nf-eyebrow">ACOMPANHAMENTO</span>
                <h3>Progresso semanal</h3>
              </div>
              <strong>{weekCompleted}/35</strong>
            </div>
            <div className="nf-progress">
              <div style={{ width: `${(weekCompleted / 35) * 100}%` }} />
            </div>
            <p>Refeições concluídas nesta semana.</p>
          </section>

          <section className="nf-panel">
            <div className="nf-panel-heading">
              <div>
                <span className="nf-eyebrow">HOJE</span>
                <h3>{currentDay.name}</h3>
              </div>
              <strong>{completedCount}/5</strong>
            </div>
            {currentDay.meals.map((key, index) => {
              const recipe = recipes[key];
              const done = completed[`${selectedDay}-${index}`];
              return (
                <div className={`nf-mini-meal ${done ? "done" : ""}`} key={index}>
                  <span className="nf-meal-check">{done ? "✓" : "○"}</span>
                  <div>
                    <strong>{recipe.title}</strong>
                    <small>{recipe.category} · {recipe.protein} g proteína</small>
                  </div>
                </div>
              );
            })}
            <button className="nf-secondary" onClick={() => setActiveTab("menu")}>
              Abrir cardápio completo →
            </button>
          </section>
        </>
      )}

      {activeTab === "menu" && (
        <>
          <section className="nf-section-heading">
            <div>
              <span className="nf-eyebrow">PLANEJAMENTO SEMANAL</span>
              <h2>Meu cardápio</h2>
            </div>
            <button className="nf-reset" onClick={resetWeek}>↻ Reiniciar</button>
          </section>

          <div className="nf-day-selector">
            {days.map((day, index) => (
              <button
                key={day.name}
                className={selectedDay === index ? "selected" : ""}
                onClick={() => setSelectedDay(index)}
              >
                {day.name.slice(0, 3)}
              </button>
            ))}
          </div>

          <section className="nf-protein-card">
            <div>
              <span>Proteína estimada do dia</span>
              <strong>{dailyProtein} g</strong>
              <small>Meta de referência: {proteinTarget} g</small>
            </div>
            <div className="nf-protein-icon">💪</div>
          </section>

          <section className="nf-meal-list">
            {currentDay.meals.map((key, index) => {
              const recipe = recipes[key];
              const done = completed[`${selectedDay}-${index}`];
              return (
                <article className={`nf-meal-card ${done ? "done" : ""}`} key={index}>
                  <div className="nf-meal-top">
                    <div>
                      <span className="nf-meal-category">{recipe.category}</span>
                      <h3>{recipe.title}</h3>
                    </div>
                    <strong className="nf-protein-number">{recipe.protein} g</strong>
                  </div>
                  <div className="nf-ingredients">
                    {recipe.ingredients.map((ingredient, i) => (
                      <span key={i}>{ingredient}</span>
                    ))}
                  </div>
                  <div className="nf-meal-actions">
                    <button onClick={() => setSelectedRecipe(recipe)}>
                      Ver preparo
                    </button>
                    <button
                      className={done ? "completed-button" : "nf-check-button"}
                      onClick={() => toggleMeal(selectedDay, index)}
                    >
                      {done ? "✓ Concluída" : "Marcar como feita"}
                    </button>
                  </div>
                </article>
              );
            })}
          </section>
        </>
      )}

      {activeTab === "shopping" && (
        <>
          <section className="nf-section-heading">
            <div>
              <span className="nf-eyebrow">ORGANIZAÇÃO DA SEMANA</span>
              <h2>Lista de compras</h2>
            </div>
            <span className="nf-status">{shopping.length} itens</span>
          </section>
          <section className="nf-panel">
            <div className="nf-panel-heading">
              <div>
                <h3>Compras da semana</h3>
                <p>Marque os produtos que já comprou.</p>
              </div>
            </div>
            {shoppingGroups.map(group => (
              <div className="nf-shopping-group" key={group.title}>
                <h3>{group.title}</h3>
                {group.items.map(item => (
                  <label className="nf-shopping-item" key={item}>
                    <input
                      type="checkbox"
                      checked={shopping.includes(item)}
                      onChange={() => toggleShopping(item)}
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            ))}
            <button className="nf-primary nf-full" onClick={exportShopping}>
              ↓ Exportar lista de compras
            </button>
          </section>
        </>
      )}

      <footer className="nf-footer">
        NUTRIFIT · Planejamento alimentar e acompanhamento
        <p>Valores nutricionais estimados. Ajuste o plano com orientação profissional.</p>
      </footer>

      {selectedRecipe && (
        <div className="nf-overlay" onClick={() => setSelectedRecipe(null)}>
          <section className="nf-modal" onClick={event => event.stopPropagation()}>
            <button className="nf-close" onClick={() => setSelectedRecipe(null)}>×</button>
            <span className="nf-eyebrow">MODO DE PREPARO</span>
            <h2>{selectedRecipe.title}</h2>
            <strong className="nf-modal-protein">{selectedRecipe.protein} g de proteína</strong>
            <h3>Ingredientes</h3>
            <ul>
              {selectedRecipe.ingredients.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            <h3>Como preparar</h3>
            <p>{selectedRecipe.preparation}</p>
            <button className="nf-primary nf-full" onClick={() => setSelectedRecipe(null)}>
              Entendi
            </button>
          </section>
        </div>
      )}

      {showProfile && (
        <div className="nf-overlay" onClick={() => setShowProfile(false)}>
          <section className="nf-modal" onClick={event => event.stopPropagation()}>
            <button className="nf-close" onClick={() => setShowProfile(false)}>×</button>
            <span className="nf-eyebrow">CONFIGURAÇÕES</span>
            <h2>Meu perfil</h2>
            <form onSubmit={event => { event.preventDefault(); setShowProfile(false); }}>
              <label>Nome
                <input value={profile.name} onChange={e => setProfile({...profile, name: e.target.value})} />
              </label>
              <label>Peso (kg)
                <input type="number" min="1" value={profile.weight} onChange={e => setProfile({...profile, weight: e.target.value})} />
              </label>
              <label>Altura (cm)
                <input type="number" min="1" value={profile.height} onChange={e => setProfile({...profile, height: e.target.value})} />
              </label>
              <label>Idade
                <input type="number" min="1" value={profile.age} onChange={e => setProfile({...profile, age: e.target.value})} />
              </label>
              <label>Objetivo
                <select value={profile.goal} onChange={e => setProfile({...profile, goal: e.target.value})}>
                  <option>Ganhar massa muscular</option>
                  <option>Perder gordura e manter músculos</option>
                  <option>Recomposição corporal</option>
                  <option>Melhorar condicionamento físico</option>
                </select>
              </label>
              <label>Dias de treino por semana
                <select value={profile.trainingDays} onChange={e => setProfile({...profile, trainingDays: Number(e.target.value)})}>
                  {[1, 2, 3, 4, 5, 6, 7].map(n => <option key={n} value={n}>{n} dias</option>)}
                </select>
              </label>
              <button className="nf-primary nf-full" type="submit">Salvar perfil</button>
            </form>
          </section>
        </div>
      )}
    </main>
  );
}
