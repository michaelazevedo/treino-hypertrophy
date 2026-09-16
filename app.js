const E=(name,muscle,sets,reps,rest,rir,technique)=>({name,muscle,sets,reps,rest,rir,technique});
const plan={
  segunda:{short:'SEG',day:'SEGUNDA-FEIRA',title:'Peito + ombro + tríceps',subtitle:'Doze séries diretas de peito; ombros e tríceps completam o estímulo sem excesso de volume indireto.',exercises:[
    E('Supino inclinado no Smith','Peito',3,'6–10','2–3 min','1–2','Banco em 20–30°. Desça controlando e mantenha as escápulas firmes.'),
    E('Chest press convergente','Peito',3,'8–12','2 min','1','Última série: rest-pause 10–12 + 4–5 + 3–4.'),
    E('Supino reto com halteres','Peito',3,'8–12','2 min','1–2','Amplitude confortável, antebraços verticais e sem bater os halteres.'),
    E('Crucifixo no cabo baixo para alto','Peito',3,'12–15','75 s','0–1','Alongue sob controle e segure 1 segundo na contração.'),
    E('Elevação lateral unilateral no cabo','Ombro',3,'12–20','60 s','1','Cabo atrás do corpo; conduza pelo cotovelo sem embalo.'),
    E('Crucifixo inverso na máquina','Ombro',3,'12–20','60 s','1','Peito apoiado; abra sem elevar os ombros.'),
    E('Tríceps francês no cabo','Tríceps',3,'10–15','75 s','1','Braços acima da cabeça para desafiar a cabeça longa em posição alongada.'),
    E('Tríceps na barra V','Tríceps',3,'8–12','90 s','1','Última série com myo-reps: 12 + 4 + 4 + 3.')
  ]},
  terca:{short:'TER',day:'TERÇA-FEIRA',title:'Pernas A — foco na parte da frente',subtitle:'Prioridade máxima para quadríceps, com manutenção de posteriores e panturrilhas — sem stiff e sem exigir a lombar.',exercises:[
    E('Hack squat','Quadríceps',4,'6–10','3 min','1–2','Amplitude máxima sem perder a lombar do encosto.'),
    E('Leg press 45°','Quadríceps',4,'10–15','2–3 min','1','Use as travas; mantenha a pelve apoiada e não faça drop-set sozinho.'),
    E('Cadeira extensora','Quadríceps',4,'12–20','75 s','1','Segure 1 segundo no topo; última série com myo-reps.'),
    E('Agachamento no Smith','Quadríceps/Glúteos',3,'8–12','2–3 min','1–2','Pés levemente à frente; desça com controle e mantenha o tronco firme.'),
    E('Cadeira flexora sentada','Posteriores',3,'10–15','90 s','1–2','Quadril firme, alongamento completo e retorno controlado.'),
    E('Panturrilha em pé na máquina','Panturrilhas',5,'8–12','75 s','1','Pausa de 2 segundos no alongamento e 1 segundo no topo.')
  ]},
  quarta:{short:'QUA',day:'QUARTA-FEIRA',title:'Costas + bíceps + trapézio',subtitle:'Doze séries diretas de costas, flexores do cotovelo e trapézio superior com a lombar protegida.',exercises:[
    E('Puxada alta com pegada neutra','Costas',3,'6–10','2–3 min','1–2','Puxe os cotovelos para os bolsos sem inclinar demais o tronco.'),
    E('Remada articulada com peito apoiado','Costas',3,'8–12','2 min','1','Última série: rest-pause 10–12 + 4–5 + 3.'),
    E('Puxada unilateral no cabo','Costas',3,'10–15','75 s','1','Permita alongamento completo e aproxime o cotovelo do quadril.'),
    E('Remada alta convergente','Costas',3,'10–15','90 s','1','Cotovelos abertos para dorsal superior, romboides e trapézio médio.'),
    E('Rosca Scott na máquina','Bíceps',3,'8–12','75 s','1','Sem retirar o braço do apoio; última série até a falha técnica.'),
    E('Rosca inclinada com halteres','Bíceps',3,'10–15','75 s','1','Ombros atrás do tronco e cotovelos imóveis.'),
    E('Encolhimento na máquina','Trapézio',4,'8–15','90 s','1','Eleve reto e segure 2 segundos no topo; não faça círculos.'),
    E('Encolhimento unilateral com halter','Trapézio',4,'10–15 cada lado','75 s','1','Eleve o ombro verticalmente em direção à orelha, segure 2 segundos no topo e desça até o alongamento completo; não faça círculos.')
  ]},
  quinta:{short:'QUI',day:'QUINTA-FEIRA',title:'Descanso',subtitle:'Recuperação completa antes do segundo bloco da semana.',exercises:[]},
  sexta:{short:'SEX',day:'SEXTA-FEIRA',title:'Pernas B — posteriores e glúteos',subtitle:'Segundo estímulo com padrões complementares e baixa exigência lombar.',exercises:[
    E('Cadeira flexora sentada unilateral','Posteriores',4,'8–12 cada perna','90 s','1','Estabilize o quadril e alcance o máximo alongamento sem perder a posição.'),
    E('Mesa flexora','Posteriores',4,'10–15','75 s','1','Não retire o quadril do banco; controle a volta por 2–3 segundos.'),
    E('Flexora em pé unilateral','Posteriores',3,'12–15 cada perna','60 s','1','Mantenha o quadril completamente parado.'),
    E('Glute drive / hip thrust máquina','Glúteos',4,'8–12','2 min','1','Trave o tronco e finalize estendendo o quadril, não a lombar.'),
    E('Passada reversa no Smith','Glúteos/Quadríceps',3,'10–12 cada perna','90 s','1','Passo longo para trás, tronco estável e força na perna da frente.'),
    E('Panturrilha sentada','Panturrilhas',5,'12–20','60–75 s','1','Amplitude total, pausa no alongamento e 1 segundo contraído no topo.')
  ]},
  sabado:{short:'SÁB',day:'SÁBADO',title:'Upper — acabamento brutal',subtitle:'Segundo estímulo de superiores: eficiente, complementar e sem volume desperdiçado.',exercises:[
    E('Supino inclinado convergente','Peito',4,'8–12','2 min','1','Foco no peitoral superior; última série rest-pause.'),
    E('Crucifixo na máquina','Peito',4,'12–15','75 s','1','Alongue com controle e não force a articulação do ombro.'),
    E('Remada baixa neutra articulada','Costas',4,'8–12','2 min','1','Peito apoiado e cotovelos próximos ao corpo.'),
    E('Pullover na máquina ou cabo','Costas',4,'10–15','75 s','1','Braços quase estendidos; mova pelo ombro, não pelo cotovelo.'),
    E('Elevação lateral no cabo','Ombro',3,'12–20','60 s','1','Pouco volume e altíssima qualidade para completar a semana.'),
    E('Rosca Bayesian no cabo','Bíceps',3,'10–15','60 s','1','Braço atrás do corpo; alongue totalmente sem girar o tronco.'),
    E('Tríceps corda acima da cabeça','Tríceps',3,'10–15','60 s','1','Última série com myo-reps.'),
    E('Encolhimento unilateral no cabo','Trapézio',3,'12–15 cada lado','60 s','1','Segure 2 segundos no topo de cada repetição.')
  ]},
  domingo:{short:'DOM',day:'DOMINGO',title:'Recuperação',subtitle:'O crescimento acontece quando o estímulo encontra recuperação.',exercises:[]}
};

const alternatives={
  'Supino inclinado no Smith':'Supino inclinado na máquina articulada',
  'Chest press convergente':'Supino reto no Smith',
  'Supino reto com halteres':'Supino declinado na máquina',
  'Crucifixo no cabo baixo para alto':'Peck deck',
  'Tríceps francês no cabo':'Tríceps testa no cabo',
  'Tríceps na barra V':'Tríceps com corda',
  'Elevação lateral unilateral no cabo':'Elevação lateral na máquina',
  'Crucifixo inverso na máquina':'Face pull no cabo',

  'Puxada alta com pegada neutra':'Barra fixa neutra assistida',
  'Remada articulada com peito apoiado':'Remada baixa no cabo com triângulo',
  'Puxada unilateral no cabo':'Pullover na máquina',
  'Remada alta convergente':'Remada cavalinho com peito apoiado',
  'Rosca Scott na máquina':'Rosca direta com barra W',
  'Rosca inclinada com halteres':'Rosca Bayesian no cabo',
  'Encolhimento na máquina':'Encolhimento no Smith',
  'Encolhimento unilateral com halter':'Encolhimento unilateral no cabo',

  'Hack squat':'Agachamento pendular',
  'Leg press 45°':'Leg press horizontal',
  'Cadeira extensora':'Sissy squat na máquina',
  'Cadeira flexora sentada':'Flexora em pé unilateral',
  'Mesa flexora':'Flexora nórdica assistida',
  'Agachamento no Smith':'Belt squat',
  'Passada reversa no Smith':'Afundo búlgaro com halteres',
  'Panturrilha em pé na máquina':'Panturrilha no leg press',
  'Panturrilha sentada':'Panturrilha donkey na máquina',

  'Rosca Bayesian no cabo':'Rosca inclinada com halteres',
  'Rosca Scott unilateral na máquina':'Rosca concentrada unilateral',
  'Tríceps francês unilateral no cabo':'Tríceps francês com halter',
  'Tríceps máquina / mergulho assistido':'Supino fechado no Smith',
  'Encolhimento no Smith':'Encolhimento com halteres',
  'Remada baixa aberta com peito apoiado':'Crucifixo inverso na máquina',
  'Desenvolvimento na máquina':'Desenvolvimento no Smith',
  'Elevação lateral na máquina':'Elevação lateral unilateral no cabo',

  'Cadeira flexora sentada unilateral':'Mesa flexora unilateral',
  'Mesa flexora':'Flexora nórdica assistida',
  'Flexora em pé unilateral':'Flexora deitada unilateral',
  'Glute drive / hip thrust máquina':'Hip thrust no Smith',
  'Passada reversa no Smith':'Afundo búlgaro com halteres',
  'Panturrilha sentada':'Panturrilha donkey na máquina',

  'Supino inclinado convergente':'Supino inclinado no Smith',
  'Crucifixo na máquina':'Crucifixo no cabo',
  'Remada baixa neutra articulada':'Remada cavalinho com peito apoiado',
  'Pullover na máquina ou cabo':'Puxada alta com pegada neutra',
  'Encolhimento unilateral no cabo':'Encolhimento na máquina',
  'Tríceps corda acima da cabeça':'Tríceps francês na máquina',
  'Elevação lateral no cabo':'Elevação lateral na máquina'
};

const warmups={
  'Supino inclinado no Smith':{group:'Peito',protocol:'3 séries progressivas: 15 reps com ~40%, 8 reps com ~60% e 3–5 reps com ~75% da carga de trabalho.'},
  'Tríceps francês no cabo':{group:'Tríceps',protocol:'1 série de adaptação: 12–15 reps leves, longe da falha. Os supinos já aqueceram o tríceps.'},
  'Elevação lateral unilateral no cabo':{group:'Ombros',protocol:'1 série leve de 15–20 reps por lado, com movimento controlado e sem chegar à falha.'},

  'Puxada alta com pegada neutra':{group:'Costas',protocol:'3 séries progressivas: 15 reps leves, 8 reps moderadas e 4–5 reps com ~70–75% da carga de trabalho.'},
  'Rosca Scott na máquina':{group:'Bíceps',protocol:'1 série de adaptação: 12–15 reps leves. As puxadas e remadas já aqueceram os flexores do cotovelo.'},
  'Encolhimento na máquina':{group:'Trapézio',protocol:'1 série leve de 15 reps, segurando 1 segundo no alto sem chegar à falha.'},

  'Hack squat':{group:'Quadríceps e glúteos',protocol:'3 séries progressivas: 15 reps leves, 8 reps moderadas e 4–5 reps com ~70–75% da carga de trabalho.'},
  'Cadeira flexora sentada':{group:'Posteriores',protocol:'2 séries progressivas: 15 reps leves e 8 reps moderadas, ambas longe da falha.'},
  'Panturrilha em pé na máquina':{group:'Panturrilhas',protocol:'2 séries leves de 12–15 reps, enfatizando amplitude e pausa no alongamento.'},

  'Cadeira flexora sentada unilateral':{group:'Posteriores',protocol:'3 séries progressivas: 15 reps leves, 8 reps moderadas e 4–5 reps com ~70–75% da carga de trabalho.'},
  'Glute drive / hip thrust máquina':{group:'Glúteos',protocol:'2 séries progressivas: 12 reps leves e 6–8 reps moderadas, sem fadigar.'},
  'Panturrilha sentada':{group:'Panturrilhas',protocol:'2 séries leves de 12–15 reps, enfatizando amplitude completa.'},

  'Supino inclinado convergente':{group:'Peito',protocol:'3 séries progressivas: 15 reps com ~40%, 8 reps com ~60% e 3–5 reps com ~75% da carga de trabalho.'},
  'Remada baixa neutra articulada':{group:'Costas',protocol:'2 séries progressivas: 12 reps leves e 6–8 reps moderadas.'},
  'Encolhimento unilateral no cabo':{group:'Trapézio',protocol:'1 série leve de 15 reps por lado, sem chegar à falha.'},
  'Tríceps corda acima da cabeça':{group:'Tríceps',protocol:'1 série leve de 15 reps. Os supinos já aqueceram o tríceps.'},
  'Elevação lateral no cabo':{group:'Ombros',protocol:'1 série leve de 15–20 reps por lado, com movimento controlado.'}
};

const order=['segunda','terca','quarta','quinta','sexta','sabado','domingo'];
const storageKey='hipertrofia-insana-lucas-ribeiro-v1';
let state=JSON.parse(localStorage.getItem(storageKey)||'{}');
let active=getTodayKey();

function getTodayKey(){return ['domingo','segunda','terca','quarta','quinta','sexta','sabado'][new Date().getDay()]}
function sessionKey(day,index){return `${day}-${index}`}
function googleImagesUrl(name){return `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(name+' exercício musculação execução correta')}`}
function save(){localStorage.setItem(storageKey,JSON.stringify(state))}
function renderTabs(){
  const tabs=document.getElementById('dayTabs');tabs.innerHTML='';
  order.forEach(key=>{const d=plan[key],b=document.createElement('button');b.className=`day-tab ${key===active?'active':''}`;b.type='button';b.innerHTML=`<span>${d.short}</span><strong>${d.exercises.length?d.exercises.reduce((s,e)=>s+e.sets,0)+' séries':'OFF'}</strong>`;b.onclick=()=>{active=key;render()};tabs.appendChild(b)});
}
function render(){
  renderTabs();const d=plan[active];document.getElementById('dayLabel').textContent=d.day;document.getElementById('sessionTitle').textContent=d.title;document.getElementById('sessionSubtitle').textContent=d.subtitle;
  const list=document.getElementById('exerciseList');list.innerHTML='';
  const counts={};d.exercises.forEach(e=>counts[e.muscle]=(counts[e.muscle]||0)+e.sets);
  document.getElementById('muscleSummary').innerHTML=Object.entries(counts).map(([m,s])=>`<span class="muscle-pill"><b>${m}</b> · ${s} séries</span>`).join('');
  d.exercises.forEach((e,i)=>{const checked=!!state[sessionKey(active,i)],alt=alternatives[e.name],warm=warmups[e.name],row=document.createElement('article');row.className=`exercise ${checked?'done':''}`;row.innerHTML=`<div class="exercise-index">${String(i+1).padStart(2,'0')}</div><div><span class="exercise-muscle">${e.muscle}</span><a class="exercise-name" href="${googleImagesUrl(e.name)}" target="_blank" rel="noopener noreferrer" title="Ver imagens e exemplos de ${e.name}">${e.name}<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5M19 5l-8 8M18 13v6H5V6h6"/></svg></a></div><div class="exercise-meta"><div><small>Séries</small><b>${e.sets}</b></div><div><small>Reps</small><b>${e.reps}</b></div><div><small>Descanso</small><b>${e.rest}</b></div><div><small>Esforço</small><b>RIR ${e.rir}</b></div></div><input class="check" type="checkbox" ${checked?'checked':''} aria-label="Marcar ${e.name} como concluído">${warm?`<div class="warmup"><span>AQUECIMENTO · ${warm.group}</span><p>${warm.protocol}</p><small>Não conta como série efetiva e nunca deve chegar perto da falha.</small></div>`:''}<div class="technique"><b>Execução:</b> ${e.technique}</div><div class="alternative"><span>PLANO B</span><div><a href="${googleImagesUrl(alt)}" target="_blank" rel="noopener noreferrer" title="Ver imagens e exemplos de ${alt}">${alt}<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5M19 5l-8 8M18 13v6H5V6h6"/></svg></a><small>Mesma configuração: ${e.sets} séries · ${e.reps} reps · ${e.rest} · RIR ${e.rir}</small></div></div>`;row.querySelector('.check').onchange=ev=>{state[sessionKey(active,i)]=ev.target.checked;save();renderSessionProgress();row.classList.toggle('done',ev.target.checked)};list.appendChild(row)});
  document.getElementById('intensityNote').style.display=d.exercises.length?'flex':'none';
  if(!d.exercises.length)list.innerHTML='<div class="rest-card"><strong>DESCANSO TOTAL</strong><p>Caminhada leve opcional, alimentação completa e 7–9 horas de sono. Nada de “compensar” o treino perdido.</p></div>';
  document.getElementById('weekVolume').textContent=`${d.exercises.reduce((s,e)=>s+e.sets,0)} séries programadas`;
  renderSessionProgress();
}
function renderSessionProgress(){const d=plan[active],done=d.exercises.filter((_,i)=>state[sessionKey(active,i)]).length,p=d.exercises.length?Math.round(done/d.exercises.length*100):100;document.getElementById('progressText').textContent=`${p}%`;document.getElementById('progressBar').style.width=`${p}%`}
document.getElementById('resetButton').onclick=()=>{plan[active].exercises.forEach((_,i)=>delete state[sessionKey(active,i)]);save();render();showToast('Treino do dia reiniciado')};
function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)}
render();
