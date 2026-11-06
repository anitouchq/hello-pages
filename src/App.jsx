import { useState } from 'react'

const initialTasks = [
  { id: 1, title: 'Выбрать главное на сегодня', done: true },
  { id: 2, title: 'Сделать короткую паузу', done: false },
  { id: 3, title: 'Закончить одно важное дело', done: false },
]

const steps = [
  { number: '01', title: 'Остановиться', text: 'Сделайте вдох и освободите немного места для своих мыслей.' },
  { number: '02', title: 'Выбрать', text: 'Оставьте в плане одно дело, которое сейчас важнее всего.' },
  { number: '03', title: 'Начать', text: 'Первый небольшой шаг уже считается движением вперёд.' },
]

function App() {
  const [tasks, setTasks] = useState(initialTasks)

  function toggleTask(id) {
    setTasks((currentTasks) => currentTasks.map((task) => (
      task.id === id ? { ...task, done: !task.done } : task
    )))
  }

  return (
    <div className="page-shell" id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Тихий ритм — на главную">
          <span className="brand-icon" aria-hidden="true">т.</span>
          <span>тихий ритм</span>
        </a>
        <nav aria-label="Главная навигация">
          <a href="#подход">Наш подход</a>
          <a className="header-link" href="#план">Мой план <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> ПРОСТРАНСТВО ДЛЯ СЕБЯ</p>
            <h1 id="hero-title">Планируй проще.<br /><em>Живи своим темпом.</em></h1>
            <p className="hero-description">Небольшое напоминание: важное не обязательно делать быстро. Начните с одного спокойного шага.</p>
            <a className="primary-button" href="#план">Составить план <span aria-hidden="true">↓</span></a>
            <p className="hero-note">Без спешки. Без лишнего шума. По-настоящему.</p>
          </div>

          <div className="plan-card" id="план">
            <div className="card-heading">
              <div><p className="card-date">ПЛАН НА СЕГОДНЯ</p><h2>Четверг, 6 ноября</h2></div>
              <span className="sun-mark" aria-hidden="true">✳</span>
            </div>
            <p className="card-hint">Достаточно начать с малого</p>
            <ul className="task-list">
              {tasks.map((task) => (
                <li key={task.id} className={task.done ? 'task-item is-done' : 'task-item'}>
                  <button type="button" className="task-toggle" aria-label={task.done ? `Отметить «${task.title}» невыполненным` : `Отметить «${task.title}» выполненным`} aria-pressed={task.done} onClick={() => toggleTask(task.id)}>
                    {task.done ? '✓' : ''}
                  </button>
                  <span>{task.title}</span>
                </li>
              ))}
            </ul>
            <div className="card-footer"><span>Твой ритм — правильный</span><span aria-hidden="true">♡</span></div>
          </div>
        </section>

        <section className="approach" id="подход" aria-labelledby="approach-title">
          <div className="section-heading">
            <p className="eyebrow">ТРИ ПРОСТЫХ ШАГА</p>
            <h2 id="approach-title">День начинается<br /><em>с внимания к себе.</em></h2>
          </div>
          <div className="step-list">
            {steps.map((step) => (
              <article className="step-card" key={step.number}>
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#top"><span className="brand-icon" aria-hidden="true">т.</span><span>тихий ритм</span></a>
        <p>Учебный проект · React + Vite</p>
        <a href="https://github.com/anitouchq/hello-pages">GitHub <span aria-hidden="true">↗</span></a>
      </footer>
    </div>
  )
}

export default App