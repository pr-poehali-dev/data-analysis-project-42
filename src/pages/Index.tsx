export default function Index() {
  return (
    <main className="min-h-screen" style={{background: 'var(--brand-light)'}}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b" style={{background: 'var(--brand-light)', borderColor: 'var(--brand-yellow)'}}>
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3">
            <img
              src="https://cdn.poehali.dev/projects/a6c72c83-bf46-4ad6-bf13-e094bad84e9a/bucket/d9c2f539-6afa-4e33-97d0-95516cbd9497.png"
              alt="СКОПИРОВ"
              className="w-12 h-12 rounded-full object-cover"
            />
            <span className="text-xl font-bold tracking-tighter" style={{color: 'var(--brand-dark)'}}>СКОПИРОВ</span>
          </a>
          <div className="flex space-x-8">
            <a href="#work" className="text-sm uppercase tracking-widest transition-colors" style={{color: 'var(--brand-gray)'}} onMouseEnter={e => (e.currentTarget.style.color = 'var(--brand-yellow-dark)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--brand-gray)')}>
              Работы
            </a>
            <a href="#about" className="text-sm uppercase tracking-widest transition-colors" style={{color: 'var(--brand-gray)'}} onMouseEnter={e => (e.currentTarget.style.color = 'var(--brand-yellow-dark)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--brand-gray)')}>
              О нас
            </a>
            <a href="#contact" className="text-sm uppercase tracking-widest transition-colors" style={{color: 'var(--brand-gray)'}} onMouseEnter={e => (e.currentTarget.style.color = 'var(--brand-yellow-dark)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--brand-gray)')}>
              Контакты
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <h1 className="text-8xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
              ПЕЧАТЬ
              <br />
              ВАШЕЙ
              <br />
              ИДЕИ
            </h1>
            <p className="text-xl max-w-xl">
              Полиграфия и сувенирная продукция с чёткостью деталей и точностью цвета. Воплощаем любые идеи в осязаемый результат.
            </p>
            <a
              href="#contact"
              className="inline-block mt-8 px-8 py-3 text-sm uppercase tracking-widest transition-colors"
              style={{background: 'var(--brand-yellow)', color: 'var(--brand-dark)'}}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--brand-yellow-dark)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--brand-yellow)')}
            >
              Получить расчёт
            </a>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square" style={{background: 'var(--brand-yellow)'}}>
              <div className="absolute -bottom-4 -right-4 w-24 h-24" style={{background: 'var(--brand-gray)'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4 md:px-8" style={{background: 'var(--brand-dark)', color: 'var(--brand-light)'}}>
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-12">РАБОТЫ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group">
              <div className="aspect-square mb-4 overflow-hidden" style={{background: 'var(--brand-light)'}}>
                <div className="w-full h-full flex items-center justify-center transition-colors duration-300" style={{background: 'var(--brand-light)'}} onMouseEnter={e => (e.currentTarget.style.background = 'var(--brand-yellow)')} onMouseLeave={e => (e.currentTarget.style.background = 'var(--brand-light)')}>
                  <span className="text-8xl font-bold" style={{color: 'var(--brand-dark)'}}>01</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Корпоративная полиграфия</h3>
              <p style={{color: 'var(--brand-gray)'}}>Визитки, бланки, конверты и папки для крупной строительной компании</p>
            </div>

            {/* Project 2 */}
            <div className="group">
              <div className="aspect-square mb-4 overflow-hidden" style={{background: 'var(--brand-light)'}}>
                <div className="w-full h-full flex items-center justify-center transition-colors duration-300" style={{background: 'var(--brand-light)'}} onMouseEnter={e => (e.currentTarget.style.background = 'var(--brand-yellow)')} onMouseLeave={e => (e.currentTarget.style.background = 'var(--brand-light)')}>
                  <span className="text-8xl font-bold" style={{color: 'var(--brand-dark)'}}>02</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Сувениры для события</h3>
              <p style={{color: 'var(--brand-gray)'}}>Брендированные ежедневники, ручки, кружки и шопперы для корпоративного форума</p>
            </div>

            {/* Project 3 */}
            <div className="group">
              <div className="aspect-square mb-4 overflow-hidden" style={{background: 'var(--brand-light)'}}>
                <div className="w-full h-full flex items-center justify-center transition-colors duration-300" style={{background: 'var(--brand-light)'}} onMouseEnter={e => (e.currentTarget.style.background = 'var(--brand-yellow)')} onMouseLeave={e => (e.currentTarget.style.background = 'var(--brand-light)')}>
                  <span className="text-8xl font-bold" style={{color: 'var(--brand-dark)'}}>03</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Каталоги и буклеты</h3>
              <p style={{color: 'var(--brand-gray)'}}>Многостраничные каталоги продукции с качественной цветопередачей для ретейл-сети</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8" style={{background: 'var(--brand-light)'}}>
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-6xl font-bold tracking-tighter mb-8" style={{color: 'var(--brand-dark)'}}>О НАС</h2>
              <div className="aspect-[4/5] relative mb-8 md:mb-0" style={{background: '#EDE8D8'}}>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2" style={{borderColor: 'var(--brand-yellow)'}}></div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-xl mb-6">
                Мы — типография полного цикла. Печатаем всё: от визиток до рекламных баннеров, от корпоративных сувениров до упаковки. Работаем точно, быстро и с гарантией качества.
              </p>
              <p className="mb-6">
                Собственное производство позволяет нам контролировать каждый этап — от допечатной подготовки до финишной обработки. Мы используем проверенные материалы и современное оборудование, чтобы ваш заказ выглядел именно так, как вы задумали.
              </p>
              <p className="mb-6">
                Работаем с бизнесом любого масштаба: от индивидуального предпринимателя до крупных корпораций. Тираж от 1 экземпляра, срок — от 1 рабочего дня.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2" style={{color: 'var(--brand-gray)'}}>Принципы</h3>
                  <ul className="space-y-2">
                    <li>Точность цвета</li>
                    <li>Чёткость деталей</li>
                    <li>Соблюдение сроков</li>
                    <li>Гарантия качества</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2" style={{color: 'var(--brand-gray)'}}>Услуги</h3>
                  <ul className="space-y-2">
                    <li>Офсетная печать</li>
                    <li>Цифровая печать</li>
                    <li>Сувенирная продукция</li>
                    <li>Широкоформатная печать</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8" style={{background: 'var(--brand-yellow)', color: 'var(--brand-dark)'}}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter mb-8">КОНТАКТЫ</h2>
              <p className="text-xl mb-8">Готовы обсудить ваш заказ? Оставьте заявку — рассчитаем стоимость и сроки.</p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Почта</span>
                  <a href="mailto:info@print-studio.ru" className="hover:underline">
                    info@print-studio.ru
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Телефон</span>
                  <a href="tel:+74951234567" className="hover:underline">
                    +7 (495) 123-45-67
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Адрес</span>
                  <span>Москва, Россия</span>
                </p>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent py-2 px-0 focus:outline-none"
                    style={{borderBottom: '2px solid var(--brand-dark)'}}
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-2">
                    Почта
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent py-2 px-0 focus:outline-none"
                    style={{borderBottom: '2px solid var(--brand-dark)'}}
                    placeholder="Ваш email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2">
                    Что нужно напечатать?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-transparent py-2 px-0 focus:outline-none"
                    style={{borderBottom: '2px solid var(--brand-dark)'}}
                    placeholder="Опишите ваш заказ: тип продукции, тираж, сроки"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-8 px-8 py-3 text-sm uppercase tracking-widest transition-colors"
                  style={{background: 'var(--brand-dark)', color: 'var(--brand-yellow)'}}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--brand-gray)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--brand-dark)'; }}
                >
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8" style={{background: 'var(--brand-dark)', color: 'var(--brand-light)'}}>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0" style={{color: 'var(--brand-gray)'}}>© 2025 СКОПИРОВ. Все права защищены.</p>
          <div className="flex space-x-8">
            <a href="#" className="text-sm uppercase tracking-widest transition-colors" style={{color: 'var(--brand-gray)'}} onMouseEnter={e => (e.currentTarget.style.color = 'var(--brand-yellow)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--brand-gray)')}>
              Instagram
            </a>
            <a href="#" className="text-sm uppercase tracking-widest transition-colors" style={{color: 'var(--brand-gray)'}} onMouseEnter={e => (e.currentTarget.style.color = 'var(--brand-yellow)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--brand-gray)')}>
              ВКонтакте
            </a>
            <a href="#" className="text-sm uppercase tracking-widest transition-colors" style={{color: 'var(--brand-gray)'}} onMouseEnter={e => (e.currentTarget.style.color = 'var(--brand-yellow)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--brand-gray)')}>
              Telegram
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}