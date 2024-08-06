# Web Builder

Web Builder is a web application that allows users to quickly and easily create simple websites by dragging and dropping various elements. With elements like Name, Description, Image, Form (Name, Number), and Spacer, you can build a simple website, preview it, and access it directly. The dashboard lists all your websites, allowing for easy editing. Additionally, all websites come with dark and light mode functionality, enhancing productivity while working.

## 🎊Some Glimpse of the App🎊

[https://github.com/user-attachments/assets/53990fdd-79cf-454e-bb5a-4fb63ab1c6e5](https://github.com/user-attachments/assets/a6999e3d-f51f-4e2c-9c8c-af58c41afed4)

## Getting Started

To get started with Web Builder locally, follow these steps:

### Clone the Repository

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/web-builder.git
    ```

### Frontend Setup

2. **Navigate to the project directory**:
    ```sh
    cd web-builder
    ```
3. **Install dependencies using Yarn**:
    ```sh
    yarn install
    ```
4. **Start the development server**:
    ```sh
    yarn run dev
    ```

### Creating and Editing Forms

5. **Access the application**:
    Open your web browser and go to `http://localhost:3000`.

6. **Create a Form**:
    - Click on "Create a Form" or select an existing template to edit.
    - You will be redirected to `http://localhost:3000/builder/{id}`.

7. **Drag and Drop Elements**:
    - Drag and drop elements like Title, Description, Image, Form fields (Name, Number), and Spacer onto your form.
    - Customize the properties of each element by clicking on them and editing the properties panel. Press "Enter" after making any changes to apply them.

8. **Preview Your Site**:
    - Once you are satisfied with your form, click the "Preview" button to see how your site will look.
    - Make any additional adjustments as needed.

By following these steps, you can quickly set up Web Builder locally, create and customize your forms, and preview your sites.

---

### Backend Setup
for Running this Project you need to add these environmnet variable in .env file

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

POSTGRES_PRISMA_URL="your_prisma_url"
POSTGRES_URL_NON_POOLING="Your_url"

### How to Setup prisma 
```
npx prisma studio
```
```
Go to localhost:5000
```




## Tech Stack

- **Next.js 13** with App Router
- **Dnd-kit** library
- **Server Actions**
- **TypeScript**
- **Tailwind CSS / Shadcn UI**
- **Vercel PostgreSQL**
- **Prisma** as ORM

## Features

- **Cross Platform**: Works seamlessly across different devices.
- **Responsive**: Adapts to various screen sizes for an optimal viewing experience.
- **Drag and Drop Designer**: Create forms effortlessly with a stunning drag-and-drop interface.
- **Layout Fields**: Title, SubTitle, Spacer, Separator, Paragraph.
- **Form Fields**: Text, Number, Select, Date, Checkbox, Textarea.
- **Customizable Fields**: Easily add and customize new fields.
- **Form Preview Dialog**: Preview forms before finalizing.
- **Light/Dark Mode Toggle**: Switch between light and dark modes for a comfortable user experience.

## Future Scope

- Add more elements to the drag-and-drop interface.
- Enhance flexibility by allowing specific width adjustments on the screen.
- Add more properties to elements for better customization.
- Integrate AI tools to generate basic templates with essential elements.



Enjoy building your websites with **Web Builder**!


## Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) to learn how you can help.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any inquiries, please contact us at [your-email@example.com](mailto:your-email@example.com).

---

Enjoy building your websites with **Web Builder**!
