import React, { useState, useRef, useEffect } from 'react';
import { Heart, ArrowRight, Sparkles, Quote } from 'lucide-react';
import gsap from 'gsap';

// ─── 💌 Tab 1: Surat Content (High-End Romantic Birthday Letter) ───
function LetterTab() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(containerRef.current,
      { opacity: 0, scale: 0.96, y: 15 },
      { opacity: 1, scale: 1, y: 0, duration: 0.45, ease: 'back.out(1.2)' }
    );
    tl.fromTo(itemsRef.current.filter(Boolean),
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, stagger: 0.08, duration: 0.45, ease: 'power2.out' },
      "-=0.2"
    );
  }, []);

  return (
    <div ref={containerRef} style={{
      background: 'linear-gradient(170deg, #ffffff 0%, #f0f9ff 50%, #ecf8e5 100%)',
      padding: '24px 20px', borderRadius: 24,
      border: '1.5px solid rgba(122,154,96,0.35)', lineHeight: 1.85,
      fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'var(--berry)',
      maxHeight: '52vh', overflowY: 'auto',
      boxShadow: '0 12px 36px rgba(15,23,42,0.08), inset 0 0 25px rgba(255,255,255,0.9)',
      position: 'relative',
    }}>
      {/* Tilted Polaroid Photo with Decorative Tape */}
      <div ref={(el) => itemsRef.current.push(el)} style={{
        float: 'right', width: 98, height: 98, marginLeft: 14, marginBottom: 10,
        borderRadius: 18, overflow: 'hidden', border: '4px solid #ffffff',
        boxShadow: '0 10px 28px rgba(15,23,42,0.18)',
        transform: 'rotate(4deg)', position: 'relative',
      }}>
        {/* Subtle Washi Tape Ornament */}
        <div style={{
          position: 'absolute', top: -6, left: '50%', transform: 'translateX(-50%)',
          width: 36, height: 12, background: 'rgba(122,154,96,0.4)',
          borderRadius: 2, backdropFilter: 'blur(4px)', zIndex: 10
        }} />
        <img src="/caca 5.jpeg" alt="Caca" style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={(e) => { e.target.src = '/caca 5.jpeg'; }} />
      </div>

      {/* Opening Badge Header */}
      <div ref={(el) => itemsRef.current.push(el)} style={{ marginBottom: 10 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '4px 14px', borderRadius: 20,
          background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(163,201,133,0.25))',
          border: '1px solid rgba(96,165,250,0.3)', marginBottom: 8
        }}>
          <Sparkles size={13} color="#2563eb" />
          <span style={{ fontFamily: 'var(--font-cute)', fontSize: '0.8rem', fontWeight: 700, color: '#1e40af', letterSpacing: '0.5px' }}>
            HAPPY 15TH BIRTHDAY, CACA 🌸✨
          </span>
        </div>

        {/* Romantic Cursive Salutation */}
        <h3 style={{
          fontFamily: 'var(--font-display)', fontSize: '1.65rem', color: '#1e40af',
          lineHeight: 1.2, margin: '4px 0 10px 0'
        }}>
          Dearest Caca,
        </h3>
      </div>

      {/* Header Greeting */}
      <p ref={(el) => itemsRef.current.push(el)} style={{ marginBottom: 14, fontWeight: 700, color: '#1e40af', fontSize: '0.92rem' }}>
        happy birthday yaa sayanggg 🥳❤️
      </p>

      {/* Paragraph 1 */}
      <p ref={(el) => itemsRef.current.push(el)} style={{ marginBottom: 14, fontWeight: 500, letterSpacing: '0.2px' }}>
        hari ini hari yang spesial banget buat kamu, aku mau jadi salah satu orang yang ngucapin selamat ulang tahun ke kamu. semoga diumur kamu yang sekarang yang ke-15 ini, semua hal baik yang kamu harapin bisa pelan-pelan tercapai. semoga Caca selalu dikasi kesehatan, kebahagiaan yang melimpah, dimudahin dalam segala urusan sekolah maupun lainnya, dan selalu dikelilingi orang-orang yang tulus sayang sama kamu.
      </p>

      {/* Paragraph 2 */}
      <p ref={(el) => itemsRef.current.push(el)} style={{ marginBottom: 14, fontWeight: 500 }}>
        jujur ga nyangka dari awal kenal sampai sekarang kita bisa sedekat dan seberharga ini satu sama lain. setiap momen yang kita lewati bareng selalu bikin aku bersyukur punya kamu di hidup aku. kamu itu orangnya baik, manis, dan selalu berhasil bikin suasana jadi lebih hangat.
      </p>

      {/* Paragraph 3 */}
      <p ref={(el) => itemsRef.current.push(el)} style={{ marginBottom: 14, fontWeight: 500 }}>
        dulu hidup aku kadang ngerasa sepi dan hampa, tapi sejak ada kamu, hari-hari aku jadi jauh lebih berwarna. ada tempat buat cerita, buat berbagi hal-hal seru ataupun random, dan selalu ada alasan buat tersenyum setiap harinya karena kamu.
      </p>

      {/* Paragraph 4 */}
      <p ref={(el) => itemsRef.current.push(el)} style={{ marginBottom: 14, fontWeight: 500 }}>
        aku mau bilang makasi banyak karena sampe sekarang Caca masi ada di hidup aku. makasi udah mau nerima aku, udah selalu sabar ngadepin aku, udah mau dengerin semua cerita aku, dan udah jadi sosok yang paling spesial dan berharga buat aku.
      </p>

      {/* 🌟 Romantic Quote Highlight Box */}
      <div ref={(el) => itemsRef.current.push(el)} style={{
        margin: '18px 0',
        padding: '16px 18px',
        borderRadius: 20,
        background: 'linear-gradient(135deg, rgba(240, 249, 255, 0.95) 0%, rgba(236, 248, 229, 0.95) 100%)',
        border: '1.5px solid rgba(96, 165, 250, 0.4)',
        boxShadow: '0 8px 24px rgba(59,130,246,0.08), inset 0 0 15px rgba(255,255,255,0.8)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <Quote size={22} color="#2563eb" style={{ transform: 'rotate(180deg)', flexShrink: 0, marginTop: 2, opacity: 0.85 }} />
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.86rem',
            fontStyle: 'italic',
            color: 'var(--berry)',
            lineHeight: 1.75,
            fontWeight: 600,
          }}>
            "mungkin aku belum selalu bisa jadi orang yang paling sempurna buat kamu, kadang masi suka bikin kesel atau kurang peka. tapi satu hal yang pasti, rasa sayang dan niat aku buat selalu jagain kamu itu tulus dari hati. maafin aku yaa kalo selama ini masi banyak kurangnya."
          </p>
        </div>
      </div>

      {/* Paragraph 5 */}
      <p ref={(el) => itemsRef.current.push(el)} style={{ marginBottom: 14, fontWeight: 500 }}>
        aku berharap di umur kamu yang ke-15 ini, kamu bisa jadi versi diri kamu yang selalu bahagia. jangan terlalu sering mikirin hal-hal yang bikin kamu sedih atau kepikiran, jangan terlalu keras sama diri sendiri juga. kalo lagi capek atau ada masalah, ingat yaa kalau kamu ga pernah sendirian. aku bakal selalu ada buat dengerin dan nemenin Caca.
      </p>

      {/* Paragraph 6 */}
      <p ref={(el) => itemsRef.current.push(el)} style={{ marginBottom: 14, fontWeight: 500 }}>
        semoga apa yang kamu cita-citain bisa tercapai semuanya. sekolahnya lancar, urusannya dimudahkan, dan apapun impian yang lagi kamu perjuangkan bisa bikin kamu bangga sama diri kamu sendiri. aku pengen liat kamu terus tersenyum, sukses, dan bahagia, sekarang sampai selamanya.
      </p>

      {/* Paragraph 7 */}
      <p ref={(el) => itemsRef.current.push(el)} style={{ marginBottom: 14, fontWeight: 500 }}>
        semoga hubungan kita juga bisa terus tumbuh lebih baik lagi. kita saling dukung, saling percaya, dan selalu cari jalan bareng di setiap keadaan. aku masih pengen bikin ribuan kenangan manis sama kamu, ketawa bareng, dan ngelewatin hari-hari indah bareng Caca.
      </p>

      {/* Paragraph 8 */}
      <p ref={(el) => itemsRef.current.push(el)} style={{ marginBottom: 14, fontWeight: 500 }}>
        sekali lagi selamat ulang tahun yang ke-15 yaa Caca sayang. semoga hari ini penuh kebahagiaan, senyum manis, dan rasa cinta. makasi udah lahir dan hadir di dunia ini, makasi udah jadi bagian terindah dalam hidup aku. i love you so much! ❤️
      </p>

      {/* Handwritten Sign-Off Card */}
      <div ref={(el) => itemsRef.current.push(el)} style={{
        marginTop: 22, padding: '16px 18px',
        background: 'linear-gradient(135deg, #ffffff 0%, #eff6ff 50%, #ecf8e5 100%)',
        borderRadius: 20, border: '1.5px solid rgba(122,154,96,0.35)',
        textAlign: 'center', boxShadow: '0 6px 20px rgba(15,23,42,0.06)',
        clear: 'both',
      }}>
        <p style={{
          fontFamily: 'var(--font-cute)', fontSize: '0.95rem', color: '#dc2626',
          fontWeight: 700, marginBottom: 4
        }}>
          happy birthday, sayanggg. i love youu 🫶❤️
        </p>
        <p style={{
          fontFamily: 'var(--font-display)', fontSize: '1.35rem', color: '#1e40af',
          lineHeight: 1.35, margin: 0, fontWeight: 700
        }}>
          Selamat Ulang Tahun yang ke-15, Caca 🌸✨
        </p>
      </div>
    </div>
  );
}

// ─── ✨ Tab 2: Impian & Harapan Content ───
function ImpianTab() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(containerRef.current,
      { opacity: 0, scale: 0.95, y: 18 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.2)' }
    );
    tl.fromTo(itemsRef.current.filter(Boolean),
      { opacity: 0, y: 25, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, stagger: 0.14, duration: 0.55, ease: 'back.out(1.4)' },
      "-=0.25"
    );
  }, []);

  const dreams = [
    {
      icon: '✈️',
      badge: 'DREAM 01',
      title: 'Closing The Distance',
      text: 'Bisa segera ketemu, ngobrol langsung tanpa terhalang layar HP, dan jalan-jalan bareng menghabiskan waktu tanpa perlu buru-buru bilang pamit.',
      gradient: 'linear-gradient(135deg, rgba(96,165,250,0.2), rgba(163,201,133,0.3))',
    },
    {
      icon: '🌟',
      badge: 'DREAM 02',
      title: 'Endless Support From Afar',
      text: 'Meskipun jauh, aku bakal selalu ada buat dengerin cerita kamu, dukung setiap langkah, sekolah, dan impian Caca. You will never walk alone.',
      gradient: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(220,252,231,0.4))',
    },
    {
      icon: '📸',
      badge: 'DREAM 03',
      title: 'Creating Real Memories',
      text: 'Bikin momen-momen manis baru di dunia nyata, foto bareng tanpa dipisah sinyal, dan merayakan ultah selanjutnya berdampingan.',
      gradient: 'linear-gradient(135deg, rgba(122,154,96,0.2), rgba(224,242,254,0.4))',
    },
    {
      icon: '💍',
      badge: 'DREAM 04',
      title: 'Building Our Forever',
      text: 'Merawat komitmen, kehangatan, dan rasa percaya ini dengan kuat sampai waktu membawa kita pada masa depan yang indah bersama.',
      gradient: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(163,201,133,0.35))',
    },
  ];

  return (
    <div ref={containerRef} style={{
      background: 'linear-gradient(150deg, #ffffff 0%, #f0f9ff 50%, #ecf8e5 100%)',
      borderRadius: 22, border: '1.5px solid rgba(122,154,96,0.3)',
      padding: '22px 18px', display: 'flex', flexDirection: 'column', gap: 14,
      boxShadow: '0 10px 32px rgba(15,23,42,0.08), inset 0 0 20px rgba(255,255,255,0.7)',
    }}>
      <div style={{ textAlign: 'center', marginBottom: 4 }}>
        <Sparkles size={20} color="#4a6b34" style={{ marginBottom: 4 }} />
        <h4 style={{
          fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#1e40af',
          lineHeight: 1.2
        }}>Harapan & Masa Depan 🌿</h4>
      </div>

      {dreams.map((item, i) => (
        <div
          key={i}
          ref={(el) => (itemsRef.current[i] = el)}
          style={{
            background: '#ffffff',
            borderRadius: 18,
            padding: '16px 16px',
            border: '1.5px solid rgba(96,165,250,0.25)',
            boxShadow: '0 4px 18px rgba(15,23,42,0.06)',
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.2s ease',
            cursor: 'pointer',
          }}
          onPointerDown={(e) => { e.currentTarget.style.transform = 'scale(0.97)'; }}
          onPointerUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
          onPointerLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
        >
          <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <div style={{
              width: 44, height: 44, flexShrink: 0, borderRadius: 14,
              background: item.gradient,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '1px solid rgba(122,154,96,0.3)', fontSize: '1.3rem',
              boxShadow: '0 4px 12px rgba(15,23,42,0.08)'
            }}>
              {item.icon}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{
                fontSize: '0.62rem', fontWeight: 800, textTransform: 'uppercase',
                letterSpacing: 1.2, color: '#2563eb', opacity: 0.85,
                marginBottom: 2
              }}>
                {item.badge}
              </div>
              <h4 style={{
                fontFamily: 'var(--font-display)', color: 'var(--berry)',
                fontSize: '1.2rem', marginBottom: 4, lineHeight: 1.25,
              }}>{item.title}</h4>
              <p style={{ fontSize: '0.79rem', color: 'var(--berry-light)', lineHeight: 1.55, fontWeight: 400 }}>
                {item.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── 🎁 Tab 3: Doa & Pesan Birthday Wishes ───
function WishesTab() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(containerRef.current,
      { opacity: 0, scale: 0.95, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.2)' }
    );
    tl.fromTo(itemsRef.current.filter(Boolean),
      { opacity: 0, x: -15 },
      { opacity: 1, x: 0, stagger: 0.15, duration: 0.5, ease: 'power2.out' },
      "-=0.2"
    );
  }, []);

  return (
    <div ref={containerRef} style={{
      background: 'linear-gradient(145deg, #ffffff 0%, #f0f9ff 50%, #ecf8e5 100%)',
      padding: '24px 20px', borderRadius: 20,
      border: '1.5px solid rgba(96,165,250,0.3)',
      boxShadow: '0 8px 32px rgba(15,23,42,0.08), inset 0 0 20px rgba(255,255,255,0.7)',
    }}>
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <Sparkles size={20} color="#3b82f6" style={{ marginBottom: 6 }} />
        <h4 style={{
          fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#1e40af',
          lineHeight: 1.2
        }}>Birthday Wishes & Prayers ✨</h4>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {[
          <span>Semoga di usiamu yang ke-15 ini, Caca selalu diberikan kesehatan, kelancaran sekolah & urusan, dan perlindungan di mana pun kamu berada. 🤲🏻💖</span>,
          <span>May your days be filled with endless joy and peace, and may the distance never fade that sweet, beautiful smile of yours! ✨</span>,
          <span>Semoga kita selalu saling support, belajar bareng dalam setiap masalah, dan menjaga ikatan hubungan kita setiap harinya. 🌸</span>,
          <span>Semoga semua cita-cita dan harapan Caca di umur 15 tahun ini bisa tercapai satu per satu. 🥂</span>,
          <span>Makasi udah lahir dan hadir di hidup aku. Happy 15th Birthday, sayanggg! 🎂🎁💝</span>
        ].map((item, i) => (
          <div key={i} ref={(el) => itemsRef.current.push(el)} style={{
            display: 'flex', gap: 12, alignItems: 'flex-start',
            padding: '10px 14px', background: '#fff', borderRadius: 12,
            boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
            border: '1px solid rgba(122,154,96,0.2)'
          }}>
            <div style={{
              width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
              background: 'linear-gradient(135deg, #7a9a60, #3b82f6)',
              color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.75rem', fontWeight: 700, fontFamily: 'var(--font-display)',
              marginTop: 2
            }}>{i + 1}</div>
            <p style={{ fontSize: '0.8rem', color: 'var(--berry)', lineHeight: 1.5, flex: 1 }}>
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── 📜 Main LoveLetter Component ───
export default function LoveLetter({ onNext }) {
  const [opened, setOpened] = useState(false);
  const [tab, setTab] = useState('letter');
  const envelopeRef = useRef(null);
  const letterRef = useRef(null);
  const sealRef = useRef(null);

  useEffect(() => {
    if (!opened) {
      gsap.fromTo(envelopeRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.4)' }
      );
    } else {
      if (letterRef.current) {
        gsap.fromTo(letterRef.current,
          { opacity: 0, y: 40, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.3)' }
        );
      }
    }
  }, [opened]);

  const open = () => {
    if (opened) return;
    const tl = gsap.timeline();
    tl.to(sealRef.current, { scale: 1.3, opacity: 0, duration: 0.3, ease: 'power2.in' });
    tl.to(envelopeRef.current, { y: 60, opacity: 0, scale: 0.9, duration: 0.4, ease: 'power2.in',
      onComplete: () => setOpened(true)
    });
  };

  const tabs = [
    { id: 'letter', label: '💌 Surat' },
    { id: 'reasons', label: '🌿 Harapan' },
    { id: 'wishes', label: '✨ Doa' },
  ];

  return (
    <div className="stage">
      {/* Envelope */}
      {!opened && (
        <div ref={envelopeRef} onClick={open} className="glass" style={{
          width: '100%', maxWidth: '350px', padding: '42px 24px', textAlign: 'center',
          cursor: 'pointer', opacity: 0, position: 'relative',
          background: 'linear-gradient(160deg, #f0f9ff 0%, #ecf8e5 100%)',
          border: '1.5px solid var(--glass-border)',
          boxShadow: '0 16px 48px rgba(15,23,42,0.15)',
        }}>
          {/* Stamp */}
          <div style={{
            position: 'absolute', top: 14, right: 14, width: 38, height: 44,
            border: '2px dashed #7a9a60', borderRadius: 6,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.2rem', opacity: 0.85,
          }}>🌸</div>

          {/* Wax Seal */}
          <div ref={sealRef} className="anim-breathe" style={{
            width: 70, height: 70, borderRadius: '50%', margin: '0 auto 22px',
            background: 'radial-gradient(circle at 40% 35%, #a3c985 0%, #4a6b34 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 6px 24px rgba(74,107,52,0.45), inset 0 -2px 6px rgba(0,0,0,0.2)',
            border: '3px solid rgba(220,252,231,0.8)',
          }}>
            <Heart size={30} fill="#fff" color="#fff" style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.2))' }} />
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: '1.85rem', color: 'var(--berry)', marginBottom: 6,
          }}>Surat Ulang Tahun</h2>
          <p style={{
            fontFamily: 'var(--font-cute)', fontSize: '0.84rem', color: '#2563eb', fontWeight: 600,
          }}>Untuk Caca 🌸✨</p>

          <div style={{
            marginTop: 24, fontSize: '0.75rem', fontWeight: 700,
            background: 'rgba(122,154,96,0.15)', color: '#4a6b34',
            padding: '8px 18px', borderRadius: 20, display: 'inline-block',
            border: '1.5px solid rgba(122,154,96,0.3)',
          }}>
            Ketuk untuk membuka surat
          </div>
        </div>
      )}

      {/* Opened Letter */}
      {opened && (
        <div ref={letterRef} className="glass" style={{
          width: '100%', maxWidth: '380px', padding: '26px 20px', opacity: 0,
          background: 'linear-gradient(180deg, #ffffff 0%, #f0f9ff 50%, #ecf8e5 100%)',
          border: '1.5px solid rgba(96,165,250,0.35)',
          boxShadow: '0 16px 48px rgba(15,23,42,0.15)',
        }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 18 }}>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontSize: '1.85rem', color: '#1e40af',
              lineHeight: 1.15, marginBottom: 4,
            }}>Happy Birthday, Caca! 🎂✨</h1>
            <p style={{
              fontFamily: 'var(--font-cute)', fontSize: '0.78rem', color: '#4a6b34', fontWeight: 600,
            }}>Pesan hangat dan doa terbaik di usiamu yang ke-15 🌿</p>
          </div>

          {/* Navigation */}
          <div style={{
            display: 'flex', background: 'rgba(224,242,254,0.7)', padding: 3,
            borderRadius: 14, marginBottom: 16, gap: 2, border: '1px solid rgba(96,165,250,0.3)',
          }}>
            {tabs.map((t) => (
              <button key={t.id} onClick={() => setTab(t.id)} style={{
                flex: 1, padding: '9px 4px', borderRadius: 11, border: 'none',
                background: tab === t.id ? 'linear-gradient(135deg, #7a9a60, #3b82f6)' : 'transparent',
                color: tab === t.id ? '#fff' : '#334155',
                fontFamily: 'var(--font-cute)', fontSize: '0.74rem', fontWeight: 700,
                cursor: 'pointer', transition: 'all 0.2s ease',
              }}>{t.label}</button>
            ))}
          </div>

          {tab === 'letter' && <LetterTab />}
          {tab === 'reasons' && <ImpianTab />}
          {tab === 'wishes' && <WishesTab />}

          {/* CTA Button */}
          <button className="btn-primary" onClick={onNext} style={{ width: '100%', marginTop: 20 }}>
            Lanjutkan ke Momen Lilin 🕯️ <ArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
