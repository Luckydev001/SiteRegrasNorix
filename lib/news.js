export const NEWS = [
    {
        slug: '19-09-esc-clima-capinhas',
        tag: 'PATCH NOTES',
        version: '0.2',
        title: 'Notas de atualização — menu ESC, clima, capinhas e cidade',
        excerpt: 'O menu ESC é novo. Clima da cidade e capinhas de celular entram agora. Painel de grupos, prisão, cavalo, drone e stress também.',
        date: '19 / 09 / 2026 — 22:10',
        cover: '/updates/drip02.png',
        featured: true,
        gallery: ['/updates/drip02.png', '/updates/drip03.png', '/updates/drip04.png'],
        body: [
            { type: 'kicker', text: 'UPDATE DA CIDADE' },
            { type: 'heading', text: 'O que mudou agora' },
            { type: 'p', text: 'Esta é a nota 0.2 da Florida RP. Menu de pausa, clima, capinhas de celular, painel de grupos, prisão, cavalo, drone e stress.' },
            { type: 'image', src: '/updates/drip02.png', caption: 'Florida RP — patch 0.2' },
            { type: 'heading', text: 'Menu ESC' },
            { type: 'p', text: 'O pause da cidade foi trocado. ESC abre um menu novo, com início, mapa, recompensas, loja, relatórios, ajustes e a aba Outros. Teclas, tutoriais, jogos, galeria, inventário, celular, pets, clima, capinhas, códigos e imobiliária ficam nesse mesmo lugar.' },
            { type: 'heading', text: 'Clima' },
            { type: 'p', text: 'A cidade ganha painel próprio de clima e horário. O comando /clima abre o controle. No ESC, em Outros, quem tem VIP escolhe o clima pessoal: ensolarado, limpo, nublado, chuva, tempestade, neblina e natal, com opção de resetar.' },
            { type: 'heading', text: 'Capinhas de celular' },
            { type: 'p', text: 'O celular ganha capinhas novas. Compra e troca ficam no ESC, na loja e no app Capinhas. A capinha aparece na mão quando o telefone está aberto.' },
            { type: 'list', items: [
                'Bear: marrom, laranja, preta, branca e branca/laranja',
                'Care: azul, rosa, verde, roxa e amarela',
                'Couple Zoo: Nick e Judy',
                'Powerpuff: verde, rosa e azul',
                'Outros: Bow Conque, Conque, Coelho Sonhador, Chin, Red Panda, Shiro e Y2K'
            ] },
            { type: 'heading', text: 'Painel de grupos' },
            { type: 'p', text: 'O F9 abre o emprego legal e a organização no mesmo painel, inclusive mecânica. Quem tinha dois grupos não cai mais só na facção. Depositar e sacar no caixa da organização passa a gravar o saldo de verdade.' },
            { type: 'heading', text: 'Prisão' },
            { type: 'p', text: 'Quem é preso vai para a cadeia de verdade. As tarefas nas lixeiras do pátio vão baixando o tempo até a soltura.' },
            { type: 'heading', text: 'Stress' },
            { type: 'p', text: 'Chocolate e vape voltam a baixar o stress. A barra cai em vez de ficar parada.' },
            { type: 'image', src: '/updates/drip03.png', caption: 'Cidade, pause e rua' },
            { type: 'heading', text: 'Cavalo' },
            { type: 'p', text: 'A montaria da polícia spawna de novo. E monta, Q chama, G ou /cavalo abre os cuidados. Dá para guardar no painel ou com /guardacavalo.' },
            { type: 'list', items: [
                'Fome, stamina e saúde',
                'Maçã, água e descanso',
                'Foto do Instagram no ícone',
                'Botão Guardar recolhe o cavalo'
            ] },
            { type: 'heading', text: 'Drone' },
            { type: 'p', text: 'A tela do drone deixa de virar neve. A visão noturna e a térmica ficam no filtro certo, sem estourar a imagem.' }
        ]
    },
    {
        slug: '15-09-policia-radio-faccoes',
        tag: 'PATCH NOTES',
        version: '0.1',
        title: 'Notas de atualização — polícia, empregos, fazenda e painel',
        excerpt: 'Pagamento dos empregos legais sobe. Fazenda e Desmanche 4 mudam o craft. Punição, painel de grupos, rádio, garagem, casas e Late Game entram nesta mesma nota.',
        date: '16 / 09 / 2026 — 07:10',
        cover: '/updates/drip04.png',
        featured: false,
        gallery: ['/updates/drip04.png', '/updates/drip02.png', '/updates/drip03.png'],
        body: [
            { type: 'kicker', text: 'UPDATE DA CIDADE' },
            { type: 'heading', text: 'O que mudou agora' },
            { type: 'p', text: 'Esta é a nota 0.1 da Florida RP. O que entrou nessa primeira leva fica nesta página. As atualizações seguintes saem em notas novas, a partir da 0.2.' },
            { type: 'image', src: '/updates/drip02.png', caption: 'Florida RP — temporada atual' },
            { type: 'heading', text: 'Empregos legais' },
            { type: 'p', text: 'O pagamento dos empregos legais estava abaixo do restante da economia. Ônibus, eletricista, guarda florestal, taxista, lixeiro, colheita e pesca passam a render mais por ponto, por corrida e na venda dos sacos. Quem trabalha de forma honesta fecha o expediente com um valor compatível com o tempo gasto.' },
            { type: 'heading', text: 'Garagem' },
            { type: 'p', text: 'O Kitty (Annis 34R) spawnava no comando, mas não saía da garagem depois de ser adicionado na conta. O modelo agora é reconhecido na retirada: quem já tem o carro na garagem consegue tirar de novo.' },
            { type: 'heading', text: 'Painel da facção' },
            { type: 'p', text: 'Dar tag no membro travava: ao pesquisar o passaporte, a tela carregava sem parar e a tag não ia. A busca responde, o nome aparece e a tag entra no passaporte.' },
            { type: 'heading', text: 'Rádio por guarnição' },
            { type: 'p', text: 'Os canais 1 a 10 deixam de ser todos da polícia junta. Cada guarnição entra só no próprio canal, em serviço. PageUp e PageDown continuam nessa faixa.' },
            { type: 'list', items: [
                '1 Militar',
                '2 Exército',
                '3 PRF',
                '4 Civil',
                '5 CORE',
                '6 BOPE',
                '7 Federal',
                '8 Bombeiros',
                '9 Paramédico',
                '10 Polícia (geral)'
            ] },
            { type: 'heading', text: 'Rádio 175' },
            { type: 'p', text: 'A frequência 175 estava presa na Fazenda, e a Vanilla não conseguia entrar. Agora a 175 é da Vanilla. É preciso estar em serviço na Vanilla para conectar.' },
            { type: 'heading', text: 'Rádio na mão' },
            { type: 'p', text: 'O rádio comprado na loja ficava preso na mão depois de fechar o aparelho. Abrir e fechar o item agora solta o prop. ESC também encerra o uso.' },
            { type: 'heading', text: 'Mafia' },
            { type: 'p', text: 'A Mafia passou a craftar armas no mesmo padrão das outras organizações de arma. O farm da rota agora também entrega material de ponta a ponta.' },
            { type: 'list', items: ['Rifles, pistolas e submetralhadoras no craft da Mafia', 'Farm da rota com corpo de arma, molas e peças'] },
            { type: 'heading', text: 'Desmanche 4' },
            { type: 'p', text: 'A rota entrega Frasco de Pólvora junto do material. No craft entram Lockpick e Corda, no mesmo padrão das outras rotas de desmanche.' },
            { type: 'heading', text: 'Fazenda' },
            { type: 'p', text: 'A Fazenda deixa o farm e o craft de arma. Passa a produzir C4, Lockpick, Algema e Corda. O farm da rota entrega o material desses itens.' },
            { type: 'list', items: ['C4', 'Lockpick', 'Algema', 'Corda'] },
            { type: 'heading', text: 'Punição' },
            { type: 'p', text: 'Quem recebe /punir vai para a área de reclusão. Se tentar sair, volta para o ponto. Ao terminar o tempo, a restrição cai e o jogador segue o caminho normal de saída.' },
            { type: 'heading', text: 'Painel de grupos' },
            { type: 'p', text: 'Alterar cargo, baú ou craft no painel passa a valer dentro do jogo. Baú que já existia na cidade abre para edição: a coordenada e o peso entram no ponto atual, sem criar outro compartimento. Depois de relogar, a alteração continua.' },
            { type: 'heading', text: 'Itens ilegais' },
            { type: 'p', text: 'O Cartão Descartável sai dos crafts de Itens Ilegais. Bahamas, Vanilla e Cassino mantêm a receita.' },
            { type: 'heading', text: 'Late Game' },
            { type: 'p', text: 'Rádio e Energético entram no kit e no loot do Late Game, no mesmo formato dos outros itens da arena.' },
            { type: 'image', src: '/updates/drip03.png', caption: 'Facções, farm e presença na rua' },
            { type: 'heading', text: 'Polícia' },
            { type: 'p', text: 'A montaria da polícia entra na loja da corporação para quem está em serviço, com animações e spawn ajustados. Sem animal por perto, o E não dispara aviso em sequência.' },
            { type: 'heading', text: 'NPC de desmanche' },
            { type: 'p', text: 'O NPC e a loja de desmanche foram removidos da cidade.' },
            { type: 'heading', text: 'Casas e mansões' },
            { type: 'p', text: 'Quem comprou casa ou mansão não abria o baú: o dono às vezes não era reconhecido, o ponto de interação era curto demais e o compartimento podia abrir sem peso. Baú e geladeira voltam a responder no E, com marcação no interior. O proprietário entra no compartimento mesmo sem o cartão na mochila.' },
            { type: 'heading', text: 'Lixeiro' },
            { type: 'p', text: 'Coletar o segundo ou o terceiro ponto não expulsa mais o jogador. O aviso de abuso saía no momento errado, quando o saco ia para o caminhão. O pagamento segue no ponto e na venda dos sacos.' },
            { type: 'heading', text: 'Site' },
            { type: 'p', text: 'O atalho da navbar aponta para o Discord da Florida. O QR do WhatsApp, que expunha o endereço do servidor, saiu do ar.' }
        ]
    }
];

export function getNews(slug) {
    return NEWS.find((item) => item.slug === slug);
}

export function getFeatured() {
    return NEWS.find((item) => item.featured) || NEWS[0];
}

export function getRest() {
    const featured = getFeatured();
    return NEWS.filter((item) => item.slug !== featured.slug);
}

export function getRelated(slug, limit = 3) {
    return NEWS.filter((item) => item.slug !== slug).slice(0, limit);
}
