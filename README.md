# 📚 Book Vibe

Book Vibe is a modern and responsive online bookstore web application built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **DaisyUI**.

Users can explore books, view detailed information, add books to their reading list or wishlist, and see their reading progress through a simple chart.

## 🌐 Live Demo
Vercel: https://book-vibe-2-teal.vercel.app/


## 📂 Repository
Github Repo: https://github.com/bhola16/book-vibe

---

## ✨ Features

* 📚 Browse a collection of books
* 🔎 View detailed information about each book
* 📖 Add books to the **Read Books** list
* ❤️ Add books to the **Wishlist**
* 📊 View read books with a reading-progress chart
* 📱 Fully responsive design
* 🧭 Easy navigation with a sticky navbar
* 🎨 Clean and modern bookstore UI
* ⚡ Fast page rendering with Next.js
* 🖼️ Optimized book images using Next.js Image
* 🔗 Dynamic book details pages

---

## 🛠️ Technologies Used

* **Next.js 16**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **DaisyUI**
* **Recharts**
* **Next.js Image**
* **JSON** for book data

---

## 📁 Project Structure

```text
book-vibe/
├── public/
│   ├── booksData.json
│   └── ...
│
├── src/
│   ├── app/
│   │   ├── books/
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── listed-books/
│   │   │   └── page.tsx
│   │   ├── read-book/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── Homepage/
│   │   │   ├── Banner.tsx
│   │   │   └── Books.tsx
│   │   └── shared/
│   │       ├── Navbar.tsx
│   │       ├── Footer.tsx
│   │       ├── BookCard.tsx
│   │       ├── ListedBookCard.tsx
│   │       ├── ReadButton.tsx
│   │       └── WishListButton.tsx
│   │
│   ├── context/
│   │   └── BooksContext.tsx
│   │
│   ├── types/
│   │   └── Type.ts
│   │
│   └── ...
│
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project

```bash
cd book-vibe
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SERVER_BASE_URL=http://localhost:3000
```

Make sure `booksData.json` is available inside the `public` directory.

The JSON file can then be accessed through:

```text
http://localhost:3000/booksData.json
```

### 5. Start the Development Server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

---

## 📖 Main Pages

### Home

```text
/
```

The homepage contains the banner and featured books.

### Books

```text
/books
```

Displays the complete collection of books.

### Book Details

```text
/books/[id]
```

Displays detailed information about an individual book.

Example:

```text
/books/1
```

### Listed Books

```text
/listed-books
```

Displays books that have been added to the Read Books list and Wishlist.

### Read Books

```text
/read-book
```

Displays the user's read books along with a chart based on the number of pages.

---

## 📊 Reading Progress

The Read Books page uses **Recharts** to visualize the number of pages of books added to the reading list.

Each book is represented as a bar in the chart, making it easier to compare the page counts of the books being read.

---

## 🗂️ Book Data

Each book contains information such as:

```ts
type BookType = {
  bookId: number;
  bookName: string;
  author: string;
  image: string;
  review: string;
  totalPages: number;
  rating: number;
  category: string;
  tags: string[];
  publisher: string;
  yearOfPublishing: number;
};
```

---

## 🎨 Design

The application uses a warm bookstore-inspired design with:

* Soft cream backgrounds
* Brown and terracotta accents
* Rounded cards
* Hover animations
* Responsive layouts
* Clean typography
* Book-cover focused presentation

The interface is designed to provide a simple and comfortable browsing experience.

---

## 📱 Responsive Design

Book Vibe is responsive across different screen sizes:

* 📱 Mobile
* 📲 Tablet
* 💻 Desktop

Tailwind CSS responsive utilities are used throughout the application.

---

## 🔮 Future Improvements

Some possible future improvements include:

* 🔐 User authentication
* 💾 Persistent wishlist and reading list
* 🔍 Book search functionality
* 🏷️ Category filtering
* ⭐ Book reviews and ratings
* 📚 Pagination
* 🌓 Dark mode
* 🗄️ Database integration
* 👤 User profiles

---

## 👨‍💻 Author

**Bholanath Bala**

ECE Graduate | Software Developer | AI Engineer in Progress

---

## 📄 License

This project was created for educational and learning purposes.
