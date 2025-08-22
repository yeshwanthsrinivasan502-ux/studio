export interface Book {
  id: number;
  title: string;
  author: string;
  genre: 'Fiction' | 'Mystery' | 'Science Fiction' | 'Fantasy' | 'Romance' | 'Non-Fiction';
  coverUrl: string;
  description: string;
}

export const mockBooks: Book[] = [
  {
    id: 1,
    title: 'The Midnight Library',
    author: 'Matt Haig',
    genre: 'Fantasy',
    coverUrl: 'https://placehold.co/300x450.png',
    description: 'Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.'
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
    genre: 'Science Fiction',
    coverUrl: 'https://placehold.co/300x450.png',
    description: 'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange.'
  },
  {
    id: 3,
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    genre: 'Mystery',
    coverUrl: 'https://placehold.co/300x450.png',
    description: 'Alicia Berenson’s life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London’s most desirable areas.'
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    coverUrl: 'https://placehold.co/300x450.png',
    description: 'The story of the five unmarried Bennet daughters, and their romantic entanglements in the English countryside of the early 19th century.'
  },
  {
    id: 5,
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    genre: 'Non-Fiction',
    coverUrl: 'https://placehold.co/300x450.png',
    description: 'A groundbreaking narrative of humanity’s creation and evolution—a #1 international bestseller that explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be “human.”'
  },
  {
    id: 6,
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    genre: 'Science Fiction',
    coverUrl: 'https://placehold.co/300x450.png',
    description: 'Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish.'
  },
  {
    id: 7,
    title: 'The Four Winds',
    author: 'Kristin Hannah',
    genre: 'Fiction',
    coverUrl: 'https://placehold.co/300x450.png',
    description: 'An epic novel of love and heroism and hope, set against the backdrop of one of America’s most defining eras—the Great Depression.'
  },
  {
    id: 8,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    coverUrl: 'https://placehold.co/300x450.png',
    description: 'A great modern classic and the prelude to The Lord of the Rings. Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar.'
  }
];
