/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    {
      image_url: 'https://imgs.search.brave.com/aXX9ydl4Vo0udFz8Sk_3ZwXRvjQk4m9aRr4CnN55lfk/rs:fit:1200:1200:1/g:ce/aHR0cDovL2dldHdh/bGxwYXBlcnMuY29t/L3dhbGxwYXBlci9m/dWxsL2MvYi80LzYy/NzgxOC5qcGc',
      name: 'CALL OF DUTY',
      category: 'adventure game',
      price: 3954,
      quantity: 10
    },
    {
      image_url: 'https://imgs.search.brave.com/3H_o_-3jzyQt4-Bg7xHtyojpXWb5aDupObYvNbnju54/rs:fit:1200:1200:1/g:ce/aHR0cDovL2Nkbi53/Y2NmdGVjaC5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTUv/MDQvR1RBLVYtUEMt/Ny5qcGc',
      name: 'GTA 5',
      category: 'adventure game',
      price: 3500,
      quantity: 6
    },
    {
      image_url: 'https://imgs.search.brave.com/eDkn1SbDaVGkFHQ0NJoNGk8gpjZDzeATSVfgE7oKi3E/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly90cnlo/YXJkZ3VpZGVzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8wNS9mZWF0dXJl/ZC1tdWx0aXZlcnN1/cy1vZmZpY2lhbC1j/aW5lbWF0aWMtdHJh/aWxlci1hbmQtY2xv/c2VkLWJldGEtYW5k/LWFscGhhLXRlc3Rp/bmctZGF0ZXMtcmV2/ZWFsZWQuanBn',
      name: 'MULTIVERSUS',
      category: 'adventure game',
      price: 100,
      quantity: 8
    },
    {
      image_url: 'https://imgs.search.brave.com/WTKljRm9fsPPI3aPSBRfHuC0XN32hJMooMJVBaPiM78/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/eHRyYWZvbmRvcy5j/b20vd2FsbHBhcGVy/cy90aGUtbGVnZW5k/LW9mLXplbGRhLTQw/NjcuanBn',
      name: 'THE LEGEND OF ZELDA',
      category: 'adventure game',
      price: 1000,
      quantity: 5
    },
    {
      image_url: 'https://imgs.search.brave.com/RpE_ql44enRadbUZz2XU-BmmJqRR6-YPVIe7dKuk8_o/rs:fit:1200:1080:1/g:ce/aHR0cDovL3dhbGxw/YXBlcmNhdmUuY29t/L3dwL2Y2Q2prTlEu/cG5n',
      name: 'SUPER SMASH BROS',
      category: 'adventure game',
      price: 2500,
      quantity: 2
    },
    {
      image_url: 'https://imgs.search.brave.com/vLNriwXB11oHVhBg8AuF4Wmh8j0z78FGO_vFfnAccNE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/bmludGVuZG9qby5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTkvMTAvbW9iaWxl/X01hcmlvS2FydFRv/dXJfc2NyZWVuXzAx/LnBuZw',
      name: 'MARIO KART',
      category: 'adventure game',
      price: 2100,
      quantity: 4
    }
  ]);
};
