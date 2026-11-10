import { useState } from 'react'
import { t } from '../lib/i18n.js'
import Icon from '../components/Icon.jsx'
import { Button } from '../components/ui.jsx'

export default function Nutrition() {
  const [selectedCat, setSelectedCat] = useState('all')
  const [goal, setGoal] = useState('hypertrophy')
  const [weight, setWeight] = useState('75')
  const [budget, setBudget] = useState('eco')
  const [days, setDays] = useState('5')
  const [generatedMenu, setGeneratedMenu] = useState(false)

  const recipes = [
    {
      id: 1,
      cat: 'eco',
      badge: t('Econômico · Café ou Lanche'),
      title: t('Panqueca de banana com ovos e aveia'),
      protein: '≈ 20 g',
      img: 'foto01_pixabay_4936950.jpg',
      ingredients: t('2 ovos, 1 banana, 3 colheres de aveia, canela a gosto'),
      prep: t('Amasse a banana, misture tudo e doure em uma frigideira antiaderente.'),
      tips: t('Ideal: café da manhã ou pré-treino. Alterne adicionando cacau 100% ou pasta de amendoim.')
    },
    {
      id: 2,
      cat: 'eco',
      badge: t('Econômico · Almoço ou Jantar'),
      title: t('Frango com arroz e feijão'),
      protein: '≈ 48 g',
      img: 'foto01_pixabay_6210186.jpg',
      ingredients: t('150 g de peito de frango, 100 g de arroz cozido, 100 g de feijão cozido, salada à vontade, alho e temperos'),
      prep: t('Grelhe o frango e sirva com arroz, feijão e salada.'),
      tips: t('Ideal: almoço ou pós-treino. Varie os temperos (cúrcuma, curry, páprica defumada).')
    },
    {
      id: 3,
      cat: 'inter',
      badge: t('Intermediária · Almoço ou Jantar'),
      title: t('Macarrão integral com sardinha'),
      protein: '≈ 32 g',
      img: 'foto01_pixabay_1050813.jpg',
      ingredients: t('100 g de sardinha drenada, 100 g de macarrão integral cozido, 1 tomate, cebola e alho, azeite'),
      prep: t('Cozinhe o macarrão e misture com sardinha refogada com tomate e cebola.'),
      tips: t('Ideal: almoço ou jantar rápido. Rico em ômega-3 e fibras.')
    },
    {
      id: 4,
      cat: 'inter',
      badge: t('Mais elaborada · Recuperação Muscular'),
      title: t('Carne moída com batata-doce e brócolis'),
      protein: '≈ 38 g',
      img: 'foto02_pixabay_10005692.jpg',
      ingredients: t('150 g de carne moída magra, 200 g de batata-doce, 100 g de brócolis, alho, cebola e azeite'),
      prep: t('Cozinhe a batata-doce, refogue a carne e prepare o brócolis no vapor.'),
      tips: t('Ideal: almoço ou jantar para alta saciedade e recuperação muscular.')
    },
    {
      id: 5,
      cat: 'prem',
      badge: t('Premium · Alta Performance'),
      title: t('Salmão grelhado com quinoa e aspargos'),
      protein: '≈ 43 g',
      img: 'foto01_pixabay_6714964.jpg',
      ingredients: t('180 g de salmão, 100 g de quinoa cozida, 100 g de aspargos ou brócolis, limão, azeite e ervas'),
      prep: t('Tempere o salmão e grelhe. Sirva com quinoa e legumes.'),
      tips: t('Ideal: almoço ou jantar especial rico em gorduras boas e proteínas nobres.')
    }
  ]

  const filtered = selectedCat === 'all' ? recipes : recipes.filter(r => r.cat === selectedCat)

  return (
    <div className="narrow">
      <div className="hdr">
        <div>
          <h1>{t('Nutrição & Receitas')}</h1>
          <div className="sub">{t('5 receitas essenciais para musculação: da mais econômica à premium')}</div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 6, marginBottom: 20, overflowX: 'auto', paddingBottom: 4 }}>
        <Button variant={selectedCat === 'all' ? 'primary' : 'ghost'} onClick={() => setSelectedCat('all')}>{t('Todas')}</Button>
        <Button variant={selectedCat === 'eco' ? 'primary' : 'ghost'} onClick={() => setSelectedCat('eco')}>{t('Econômicas')}</Button>
        <Button variant={selectedCat === 'inter' ? 'primary' : 'ghost'} onClick={() => setSelectedCat('inter')}>{t('Intermediárias')}</Button>
        <Button variant={selectedCat === 'prem' ? 'primary' : 'ghost'} onClick={() => setSelectedCat('prem')}>{t('Premium')}</Button>
      </div>

      <div className="list">
        {filtered.map(r => (
          <div key={r.id} className="card" style={{ marginBottom: 16, overflow: 'hidden', padding: 0 }}>
            <div style={{ position: 'relative', height: 200, background: 'var(--card-bg)' }}>
              <img src={'/' + r.img} alt={r.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={e => { console.error('Erro ao carregar imagem:', e.target.src); e.target.style.display = 'none' }} />
              <span style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(0,0,0,0.75)', color: '#38bdf8', padding: '4px 10px', borderRadius: 20, fontSize: '0.8rem', fontWeight: 700 }}>
                {r.protein}
              </span>
            </div>
            <div style={{ padding: 16 }}>
              <span className="tag acc" style={{ marginBottom: 8, display: 'inline-block' }}>{r.badge}</span>
              <div className="big" style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 8 }}>{r.title}</div>
              <p className="muted small" style={{ marginBottom: 6 }}><strong>{t('Ingredientes')}:</strong> {r.ingredients}</p>
              <p className="muted small" style={{ marginBottom: 12 }}><strong>{t('Preparo')}:</strong> {r.prep}</p>
              <div className="card small muted" style={{ background: 'rgba(56, 189, 248, 0.08)', borderLeft: '3px solid var(--accent)', margin: 0 }}>
                💡 <strong>{t('Dica')}:</strong> {r.tips}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tabela Comparativa */}
      <div className="card" style={{ padding: 16, marginTop: 24, marginBottom: 24 }}>
        <div style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 12 }}>{t('Como escolher?')}</div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)', color: 'var(--muted)' }}>
                <th style={{ padding: '8px 4px' }}>{t('Receita')}</th>
                <th style={{ padding: '8px 4px' }}>{t('Custo')}</th>
                <th style={{ padding: '8px 4px' }}>{t('Objetivo')}</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '8px 4px' }}>Panqueca</td>
                <td style={{ padding: '8px 4px' }}>$</td>
                <td style={{ padding: '8px 4px' }}>Energia e proteína</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '8px 4px' }}>Frango e feijão</td>
                <td style={{ padding: '8px 4px' }}>$$</td>
                <td style={{ padding: '8px 4px' }}>Ganho muscular</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '8px 4px' }}>Sardinha e massa</td>
                <td style={{ padding: '8px 4px' }}>$$</td>
                <td style={{ padding: '8px 4px' }}>Proteína e energia</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '8px 4px' }}>Carne e batata-doce</td>
                <td style={{ padding: '8px 4px' }}>$$$</td>
                <td style={{ padding: '8px 4px' }}>Recuperação e saciedade</td>
              </tr>
              <tr>
                <td style={{ padding: '8px 4px' }}>Salmão e quinoa</td>
                <td style={{ padding: '8px 4px' }}>$$$$</td>
                <td style={{ padding: '8px 4px' }}>Proteína e gorduras boas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Gerador de Cardápio Direcionado */}
      <div className="card" style={{ padding: 16, background: 'linear-gradient(135deg, rgba(56,189,248,0.1), rgba(30,41,59,0.5))', border: '1px solid var(--accent)' }}>
        <div style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 8 }}>{t('Vamos montar uma dieta mais direcionada?')}</div>
        <div className="sub" style={{ marginBottom: 16 }}>{t('Monte seu cardápio personalizado com base em seu objetivo e orçamento.')}</div>

        <div style={{ display: 'grid', gap: 12, marginBottom: 16 }}>
          <div>
            <label style={{ fontSize: '0.85rem', color: 'var(--muted)', display: 'block', marginBottom: 4 }}>{t('1. Qual é seu objetivo?')}</label>
            <select value={goal} onChange={e => setGoal(e.target.value)} style={{ width: '100%', padding: 10, borderRadius: 8, background: 'var(--card-bg)', color: 'var(--text)', border: '1px solid var(--border)' }}>
              <option value="hypertrophy">{t('Ganhar massa muscular')}</option>
              <option value="fatloss">{t('Perder gordura e manter músculos')}</option>
              <option value="recomp">{t('Recomposição corporal')}</option>
              <option value="conditioning">{t('Melhorar condicionamento físico')}</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: '0.85rem', color: 'var(--muted)', display: 'block', marginBottom: 4 }}>{t('2. Qual é seu peso atual (kg)?')}</label>
            <input type="number" value={weight} onChange={e => setWeight(e.target.value)} style={{ width: '100%', padding: 10, borderRadius: 8, background: 'var(--card-bg)', color: 'var(--text)', border: '1px solid var(--border)' }} />
          </div>

          <div>
            <label style={{ fontSize: '0.85rem', color: 'var(--muted)', display: 'block', marginBottom: 4 }}>{t('3. Qual é seu orçamento para alimentação?')}</label>
            <select value={budget} onChange={e => setBudget(e.target.value)} style={{ width: '100%', padding: 10, borderRadius: 8, background: 'var(--card-bg)', color: 'var(--text)', border: '1px solid var(--border)' }}>
              <option value="eco">{t('Econômico')}</option>
              <option value="inter">{t('Intermediário')}</option>
              <option value="prem">{t('Premium')}</option>
              <option value="mix">{t('Misturado')}</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: '0.85rem', color: 'var(--muted)', display: 'block', marginBottom: 4 }}>{t('4. Quantos dias treina por semana?')}</label>
            <select value={days} onChange={e => setDays(e.target.value)} style={{ width: '100%', padding: 10, borderRadius: 8, background: 'var(--card-bg)', color: 'var(--text)', border: '1px solid var(--border)' }}>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
        </div>

        <Button variant="primary" style={{ width: '100%' }} onClick={() => setGeneratedMenu(true)}>{t('Montar meu cardápio')}</Button>

        {generatedMenu && (
          <div style={{ marginTop: 20, padding: 16, background: 'var(--card-bg)', borderRadius: 12, border: '1px solid var(--border)' }}>
            <div style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: 8 }}>{t('Cardápio Personalizado Gerado!')}</div>
            <p className="small muted" style={{ marginBottom: 12 }}>
              {t('Com base em')} <strong>{weight} kg</strong>, {t('objetivo')} <strong>{goal}</strong>, {t('orçamento')} <strong>{budget}</strong> {t('e')} <strong>{days} {t('dias de treino')}</strong>:
            </p>
            <ul className="small muted" style={{ paddingLeft: 20, display: 'grid', gap: 6, margin: 0 }}>
              <li><strong>{t('Café da Manhã')}:</strong> {t('Panqueca de banana com ovos e aveia + Café sem açúcar')}</li>
              <li><strong>{t('Almoço / Pós-Treino')}:</strong> {budget === 'eco' ? t('Frango com arroz e feijão + Salada colorida') : t('Carne moída com batata-doce e brócolis')}</li>
              <li><strong>{t('Lanche da Tarde')}:</strong> {t('Iogurte natural com aveia e frutas')}</li>
              <li><strong>{t('Jantar')}:</strong> {budget === 'prem' ? t('Salmão grelhado com quinoa e aspargos') : t('Macarrão integral com sardinha')}</li>
            </ul>
            <div style={{ marginTop: 12, fontSize: '0.75rem', color: 'var(--accent)' }}>
              ✨ {t('Os valores de proteína estimados cobrem perfeitamente sua recuperação muscular.')}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

