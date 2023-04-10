import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

describe('App', () => {
test('renders Navbar', () => {
render(
<MemoryRouter>
<App />
</MemoryRouter>
);
const navbarElement = screen.getByRole('navigation');
expect(navbarElement).toBeInTheDocument();
});

test('renders Footer', () => {
render(
<MemoryRouter>
<App />
</MemoryRouter>
);
const footerElement = screen.getByRole('contentinfo');
expect(footerElement).toBeInTheDocument();
});

test('renders Home page on "/" route', () => {
render(
<MemoryRouter initialEntries={['/']}>
<App />
</MemoryRouter>
);
const homeElement = screen.getByText(/Welcome to the Pet Adoption Agency!/i);
expect(homeElement).toBeInTheDocument();
});

test('renders About page on "/About" route', () => {
render(
<MemoryRouter initialEntries={['/About']}>
<App />
</MemoryRouter>
);
const aboutElement = screen.getByText(/Learn more about our organization/i);
expect(aboutElement).toBeInTheDocument();
});

test('renders Dogs page on "/Dogs" route', () => {
render(
<MemoryRouter initialEntries={['/Dogs']}>
<App />
</MemoryRouter>
);
const dogsElement = screen.getByText(/Adopt a Dog/i);
expect(dogsElement).toBeInTheDocument();
});

test('renders Dog page on "/dogs/:name" route', () => {
const dogName = 'Fido';
render(
<MemoryRouter initialEntries={[/dogs/${dogName}]}>
<App />
</MemoryRouter>
);
const dogElement = screen.getByText(Meet ${dogName});
expect(dogElement).toBeInTheDocument();
});

test('renders Cats page on "/Cats" route', () => {
render(
<MemoryRouter initialEntries={['/Cats']}>
<App />
</MemoryRouter>
);
const catsElement = screen.getByText(/Adopt a Cat/i);
expect(catsElement).toBeInTheDocument();
});

test('renders Cat page on "/cats/:name" route', () => {
const catName = 'Whiskers';
render(
<MemoryRouter initialEntries={[/cats/${catName}]}>
<App />
</MemoryRouter>
);
const catElement = screen.getByText(Meet ${catName});
expect(catElement).toBeInTheDocument();
});

test('renders Contact page on "/Contact" route', () => {
render(
<MemoryRouter initialEntries={['/Contact']}>
<App />
</MemoryRouter>
);
const contactElement = screen.getByText(/Get in touch/i);
expect(contactElement).toBeInTheDocument();
});

})