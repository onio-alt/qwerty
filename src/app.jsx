/* global React, ReactDOM */
const { useState, useEffect } = React;

function App() {
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "accent": "navy",
    "heroVariant": "default",
    "showTweaks": true
  }/*EDITMODE-END*/;

  const [tweaks, setTweaksState] = useState(TWEAK_DEFAULTS);
  const [tweaksOpen, setTweaksOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState(null);

  useEffect(() => {
    document.body.dataset.accent = tweaks.accent;
  }, [tweaks.accent]);

  useEffect(() => {
    const onMsg = (e) => {
      const d = e.data || {};
      if (d.type === '__activate_edit_mode') setTweaksOpen(true);
      if (d.type === '__deactivate_edit_mode') setTweaksOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const setTweaks = (patch) => {
    setTweaksState(prev => ({ ...prev, ...patch }));
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: patch }, '*');
  };

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setLightboxSrc(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <React.Fragment>
      <Header/>
      <main>
        <Hero variant={tweaks.heroVariant}/>
        <Stats/>
        <Conclusions/>
        <Helps/>
        <Expert onOpenLightbox={setLightboxSrc}/>
        <Advantages/>
        <Process/>
        <Objects/>
        <Examples/>
        <FAQ/>
        <Contact/>
      </main>
      <Footer/>

      {lightboxSrc && (
        <div className="lightbox" onClick={() => setLightboxSrc(null)}>
          <button className="lightbox__close" aria-label="Закрыть"><IconClose size={20}/></button>
          <img src={lightboxSrc} alt="" onClick={e => e.stopPropagation()}/>
        </div>
      )}

      {tweaksOpen && (
        <TweaksPanel title="Tweaks">
          <TweakSection title="Цветовая тема">
            <TweakRadio
              value={tweaks.accent}
              onChange={(v) => setTweaks({ accent: v })}
              options={[
                { value: 'navy',  label: 'Navy (по умолчанию)' },
                { value: 'deep',  label: 'Глубокий чёрно-синий' },
                { value: 'ocean', label: 'Океан (синий)' },
                { value: 'slate', label: 'Серо-синий (мягкий)' },
              ]}
            />
          </TweakSection>
          <TweakSection title="Первый экран (Hero)">
            <TweakRadio
              value={tweaks.heroVariant}
              onChange={(v) => setTweaks({ heroVariant: v })}
              options={[
                { value: 'default', label: 'Текст слева / изображение справа' },
                { value: 'reverse', label: 'Изображение слева / текст справа' },
                { value: 'wide',    label: 'По центру, широкая фотография' },
              ]}
            />
          </TweakSection>
        </TweaksPanel>
      )}
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);