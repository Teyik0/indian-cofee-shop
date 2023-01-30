import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Plat, SousPlat } from '../../components';

const boissons = () => {
  return (
    <>
      <Head>
        <title>Boissons | Indian Coffee</title>
        <meta property='og:title' content='Plats | Indian Coffee' />
        <meta property='og:site_name' content='Indian Coffee' />
        <meta
          name='description'
          content='Toutes les boissons à la carte, que ce soit à emporter ou sur place.'
        />
        <meta
          property='og:description'
          content='Toutes les boissons à la carte, que ce soit à emporter ou sur place.'
        />
        <meta property='og:locale' content='fr' />
        <meta property='og:locale:alternate' content='en' />
        <meta property='og:type' content='website' />
        <meta
          property='article:publisher'
          content='https://www.facebook.com/profile.php?id=100083047666745'
        />
        <meta property='og:url' content='https://indian-cofee.netlify.app/' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <section className='w-full items-center justify-center text-white pb-24'>
        <div className='pl-4 pr-4 pt-24 sm:pt-48'>
          <h1 className='uppercase text-[#e8b755] text-2xl font-bold tracking-wider mb-2'>
            Boissons
          </h1>
          <div className='mb-2'>
            <Plat title='EAUX ET SOFT' details='' price='' />
            <SousPlat
              title='Coca cola/coca zéro (33cl)'
              details=''
              price='3,50€'
            />
            <SousPlat title='Orangina (25cl)' details='' price='3,70€' />
            <SousPlat title='Schweppes (33cl)' details='' price='3,70€' />
            <SousPlat title='Sprite (33cl)' details='' price='3,70€' />
            <SousPlat title='Diablo (25cl)' details='' price='3,50€' />
            <SousPlat
              title='Jus de fruit (25cl)'
              details='(Orange, mangue, ananas, pomme, ananas, fraise, abricot)'
              price='4,00€'
            />
            <SousPlat
              title='Lassy'
              details='(Mangue, banane, pistache, Coco ou rose)'
              price='4,50€'
            />
            <SousPlat title='Rose milk' details='(Lait rose)' price='3,00€' />
            <SousPlat title='Evian (50cl)' details='' price='3,00€' />
            <SousPlat title='Evian (1L)' details='' price='5,00€' />
            <SousPlat title='San pellegrino (50cl)' details='' price='3,00€' />
            <SousPlat title='San pellegrino (1L)' details='' price='5,00€' />
          </div>

          <div className='mb-2'>
            <Plat title='COCKTAILS SANS ALCOOL' details='' price='' />
            <SousPlat
              title='Virgin Mojito'
              details='(Feuille de menthe, citron, sucre et glace pilée)'
              price='5,90€'
            />
            <SousPlat
              title='Pinacolada'
              details="(Jus d'ananas, crème de coco)"
              price='5,90€'
            />
            <SousPlat
              title='Sex on the beach'
              details="(Jus d'ananas, Liqueur de pêche, jus de cranberry)"
              price='5,90€'
            />
            <SousPlat
              title='Grenade'
              details='(Jus de litchi, goyave, framboise, citron vert, tonic) '
              price='5,90€'
            />
          </div>

          <div className='mb-2'>
            <Plat title='COCKTAIL AVEC ALCOOL' details='' price='' />
            <SousPlat
              title='Mojito'
              details='(Rhum, citron, menthe, eau pétillante, sirop de sucre de canne, jus de pomme)'
              price='7,90€'
            />
            <SousPlat
              title='Pina colada'
              details='(Rhum, jus d’ananas, crème de coco)'
              price='7,90€'
            />
            <SousPlat
              title='Tequila sun rise'
              details='(tequila, jus d’orange, sirop de grenadine)'
              price='7,90€'
            />
            <SousPlat
              title='Blue lagon'
              details='(vodka, curaçao, citron)'
              price='7,90€'
            />
            <SousPlat
              title='Cosmopolitan'
              details='(vodka, cointreau, jus cranberry, citron)'
              price='7,90€'
            />
            <SousPlat
              title='Blue lagon'
              details='(vodka, cointreau, jus cranberry, citron)'
              price='7,90€'
            />
            <SousPlat
              title='Margarita'
              details='(tequila, Cointreau, citron)'
              price='7,90€'
            />
            <SousPlat
              title='Ti punch'
              details='(rhum, sirop de sucre de canne, sucre de canne, citron)'
              price='7,90€'
            />
          </div>

          <div className='mb-2'>
            <Plat title='BOISSONS CHAUDES' details='' price='' />
            <SousPlat
              title='Chai'
              details='(Thé au lait massala)'
              price='3,00€'
            />
            <SousPlat title='Thé ceylon' details='' price='3,00€' />
            <SousPlat
              title='Thé Richard'
              details='(Fruit rouge,earl grey,vanille caramel)'
              price='3,00€'
            />
            <SousPlat title='Café' details='' price='2,00€' />
            <SousPlat title='Café crème' details='' price='3,00€' />
            <SousPlat title='Chocolat chaud' details='' price='3,50€' />
            <SousPlat
              title='Ceylon coffee'
              details='(café traditionnelle aux épices du Sri-lanka)'
              price='2,50€'
            />
          </div>

          <div className='mb-2'>
            <Plat title='Apéritifs' details='' price='' />
            <SousPlat title='Ricard' details='(2cl)' price='4,50€' />
            <SousPlat title='Kir' details='(12cl)' price='3,50€' />
            <SousPlat title='Kir Royal' details='(12cl)' price='8,00€' />
            <SousPlat title='Gin Tonic' details='(2cl)' price='5,50€' />
            <SousPlat title='Rhum' details='(4cl)' price='6,50€' />
            <SousPlat title='Balantines' details='(4cl)' price='7,00€' />
            <SousPlat title='Jack Daniel' details='' price='8,00€' />
            <SousPlat title='Belvedere' details='' price='8,00€' />
            <SousPlat title='Ciroc' details='' price='9,00€' />
            <SousPlat
              title='Coupe de champagne'
              details='(12cl)'
              price='9,00€'
            />
          </div>

          <div className='mb-2'>
            <Plat title='les bières' details='' price='' />
            <SousPlat title='King Fisher (33cl)' details='' price='4,50€' />
            <SousPlat title='King Fisher (62,5cl)' details='' price='8,00€' />
            <SousPlat
              title='Lion stout ou lager (33cl)'
              details=''
              price='5,00€'
            />
            <SousPlat
              title='Lion stout ou lager (62,5cl)'
              details=''
              price='9,00€'
            />
            <SousPlat title='Heineken' details='' price='4,50€' />
            <SousPlat title='Desperatos' details='' price='5,00€' />
            <SousPlat title='Kronenbourg 1664' details='' price='4,50€' />
          </div>

          <div className='mb-2'>
            <Plat title='LES CHAMPAGNES (75cl)' details='' price='' />
            <SousPlat title='Nicolas feuillatte' details='' price='47,00€' />
            <SousPlat
              title='Piper heidsieck'
              details='(brut blanc)'
              price='60,00€'
            />
            <SousPlat title='Moet et chandon' details='' price='80,00€' />
            <SousPlat
              title='Ruinart'
              details='(blanc de blanc)'
              price='110,00€'
            />
            <SousPlat title='Ruinart Rosé' details='' price='130,00€' />
          </div>

          <h2 className='text-2xl text-center mt-8'>LES VINS</h2>
          <div className='mb-2'>
            <Plat title='VINS ROSE (75cl)' details='' price='' />
            <SousPlat
              title='Tavel'
              details='(château de Manissy)'
              price='24,00€'
            />
            <SousPlat
              title='Côtes de provence'
              details='(les hauts de Masterel)'
              price='20,00€'
            />
            <SousPlat
              title='Côtes de provence'
              details='(Saint-Tropez)'
              price='23,00€'
            />
            <SousPlat
              title='Côtes de provence'
              details='(Estandon Héritage)'
              price='27,00€'
            />
          </div>

          <div className='mb-2'>
            <Plat title='VINS BLANC (75cl)' details='' price='' />
            <SousPlat
              title='Muscadet'
              details="(château de l'hyvernière)"
              price='16,50€'
            />
            <SousPlat
              title='Riesling'
              details='(cave de turckheim)'
              price='24,00€'
            />
            <SousPlat
              title='Sancerre'
              details='(les rochettes)'
              price='35,00€'
            />
          </div>

          <div className='mb-2'>
            <Plat title='VINS ROUGE (75cl)' details='' price='' />
            <SousPlat
              title='Côtes du rhone AOP'
              details='(Bouquet de comtat)'
              price='16,00€'
            />
            <SousPlat
              title='Château de Camarsac AOP'
              details='(bordeaux supérieur)'
              price='18,00€'
            />
            <SousPlat
              title='Languedoc Roussillon'
              details='(Saint chinian galopins)'
              price='19,50€'
            />
            <SousPlat
              title='Brouilly'
              details='(domaine de chatelan)'
              price='24,00€'
            />
            <SousPlat
              title='Medoc'
              details='(bordeaux cru bourgeois château Tour prignac)'
              price='30,00€'
            />
          </div>

          <div className='mb-2'>
            <Plat title='VINS INDIEN (75cl)' details='' price='' />
            <SousPlat title='Grovers rouge' details='' price='24,00€' />
            <SousPlat title='Grover’s rose' details='' price='24,00€' />
          </div>

          <div className='mb-2'>
            <Plat title='LES VINS EN PICHET' details='' price='' />
            <SousPlat
              title='Pichet de vin rouge'
              details='(25cl)'
              price='6,50€'
            />
            <SousPlat
              title='Pichet de vin rouge'
              details='(50cl)'
              price='10,00€'
            />
            <SousPlat
              title='Pichet de vin rose'
              details='(25cl)'
              price='6,50€'
            />
            <SousPlat
              title='Pichet de vin rose'
              details='(50cl)'
              price='10,00€'
            />
            <SousPlat
              title='Pichet de vin blanc'
              details='(25cl)'
              price='6,50€'
            />
            <SousPlat
              title='Pichet de vin blanc'
              details='(50cl)'
              price='10,00€'
            />
          </div>

          <div className='mb-2'>
            <Plat title='LES VINS EN VERRE (14cl)' details='' price='' />
            <SousPlat
              title='Muscadet'
              details="(château de l'hyvernière)"
              price='4,00€'
            />
            <SousPlat
              title='Riesling'
              details='(cave de turckheim)'
              price='5,00€'
            />
            <SousPlat
              title='Cotes du rhone AOP'
              details='(Bouquet de comtat)'
              price='4,00€'
            />
            <SousPlat
              title='Chateau de Camarsac AOP'
              details='(bordeaux supérieur)'
              price='4,50€'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default boissons;
