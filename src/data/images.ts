export const images = {
  homeHero: 'https://images.pexels.com/photos/6197117/pexels-photo-6197117.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  kitchen: 'https://images.pexels.com/photos/5591903/pexels-photo-5591903.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  kitchenWide: 'https://images.pexels.com/photos/10450057/pexels-photo-10450057.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  bathroom: 'https://images.pexels.com/photos/4239130/pexels-photo-4239130.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  bathroomDetail: 'https://images.pexels.com/photos/4098576/pexels-photo-4098576.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  moveOut: 'https://images.pexels.com/photos/3935340/pexels-photo-3935340.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  moveOutBoxes: 'https://images.pexels.com/photos/4246098/pexels-photo-4246098.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  office: 'https://images.pexels.com/photos/6550121/pexels-photo-6550121.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  officeDetail: 'https://images.pexels.com/photos/7534208/pexels-photo-7534208.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  construction: 'https://images.pexels.com/photos/3616735/pexels-photo-3616735.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  supplies: 'https://images.pexels.com/photos/3177257/pexels-photo-3177257.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  suppliesStudio: 'https://images.pexels.com/photos/7513103/pexels-photo-7513103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  after: 'https://images.pexels.com/photos/7045828/pexels-photo-7045828.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
} as const;

export type ImageKey = keyof typeof images;
