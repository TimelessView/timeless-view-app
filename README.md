# Timeless View

**Timeless View** is a sleek and dynamic web application that allows users to explore and book Olena's photography and
videography services. This app seamlessly combines functionality, design, and performance to deliver a professional
booking experience.

## Features

### 1. **Photography & Videography Service Booking**

- Users can browse Olena's services and request bookings directly through the website.
- Booking form with clear, user-friendly input fields.

### 2. **Payment Integration**

- Fully integrated with **Stripe** for secure payment processing.
- After successful payments, a **webhook** is triggered to notify both the owner (Olena) and the customer via email.

### 3. **Consultation Requests**

- Users can easily request a consultation by filling out a dedicated form.
- Form submissions are validated using **Zod** for accuracy and error handling.

### 4. **Email Notifications**

- Emails for successful payments are powered by the **Resend** platform.
- Notifications are sent to:
    - **Olena (Owner):** To keep her updated on new bookings and payments.
    - **Customer:** To confirm payment and booking details.

### 5. **Success Page**

- After completing a booking and payment, users are redirected to the `/success` page.
- This page inherits the design from the homepage but includes an open "Thanks for Deposit" form to acknowledge their
  booking.

### 6. **Modern UI/UX with Animations**

- Built with **Next.js** for fast performance and seamless navigation.
- **Framer Motion** provides smooth animations for interactive elements.
- Includes **React Slick** sliders to showcase services and portfolios dynamically.

### 7. **Error Handling**

- Comprehensive error handling for user inputs and payment processes.
- Validations are handled gracefully with **Zod**, ensuring forms are robust and user-friendly.

### 8. **Custom Domain**

- The app is live and accessible via the domain **[timelessview.ca](https://timelessview.ca)**.

---

## Technology Stack

| **Tool**          | **Usage**                                                           |
|-------------------|---------------------------------------------------------------------|
| **Next.js**       | Framework for building the web application.                         |
| **Stripe**        | Payment processing for booking services.                            |
| **Resend**        | Email platform for sending payment success notifications.           |
| **Framer Motion** | Animation library for a modern and interactive UI.                  |
| **React Slick**   | Slider functionality for showcasing services.                       |
| **Zod**           | Form validation library ensuring input accuracy and error handling. |
| **Vercel**        | Hosting and deployment platform for the web application.            |

---

## Deployment

- **Platform:** Deployed on [Vercel](https://vercel.com) for seamless CI/CD integration.
- **Domain:** Linked to **[timelessview.ca](https://timelesswiew.ca)** as the primary custom domain.
- **Current State:** As of **November 30, 2024**, the app is fully deployed and operational.

---

## Development Notes

- The app was developed locally by a single developer and later transferred to the client’s GitHub repository.
- Collaboration rights have been granted to the developer for ongoing maintenance and updates.
- The webhook for Stripe payment notifications is configured in the client’s Stripe account.

---

# Environment Variables Configuration

To ensure the smooth operation of the **Timeless View** application, the following environment variables must be
properly configured. These variables manage critical integrations such as payment processing, email notifications, and
domain settings.

---

## Environment Variables

### **Email Integration (Resend)**

| **Variable**            | **Description**                                                                                         | **Example Value**          |
|-------------------------|---------------------------------------------------------------------------------------------------------|----------------------------|
| `RESEND_API_KEY`        | API key for the Resend platform used to send email notifications.                                       | `your-resend-api-key`      |
| `RESEND_RECEIVER_EMAIL` | Email address where notifications (e.g., successful payments) will be sent to the owner of the website. | `owner@timelessview.ca`    |
| `RESEND_FROM_DOMAIN`    | The domain used as the sender email address for notifications.                                          | `no-reply@timelessview.ca` |

---

### **Payment Integration (Stripe)**

| **Variable**                         | **Description**                                                                        | **Example Value**                     |
|--------------------------------------|----------------------------------------------------------------------------------------|---------------------------------------|
| `STRIPE_SECRET_KEY`                  | Secret API key for Stripe, enabling secure payment processing.                         | `sk_live_your_stripe_secret_key`      |
| `STRIPE_WEBHOOK_SECRET`              | Secret key used to validate the webhook triggered by Stripe after successful payments. | `whsec_your_webhook_secret_key`       |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Public Stripe API key, used for frontend integration with the Stripe checkout process. | `pk_live_your_stripe_publishable_key` |

---

### **Application Settings**

| **Variable**          | **Description**                                                     | **Example Value**             |
|-----------------------|---------------------------------------------------------------------|-------------------------------|
| `BASE_URL`            | Base URL of the deployed application.                               | `https://timeless-view-app.vercel.app/`     |
| `NEXT_PUBLIC_API_URL` | Public API URL for accessing server-side routes in the application. | `https://timeless-view-app.vercel.app/api` |

---

## Configuration Instructions

1. **Create a `.env` File**  
   In the root directory of your project, create a `.env` file if it doesn’t already exist.

2. **Add Environment Variables**  
   Copy and paste the variables listed above into the `.env` file and replace the placeholder values with the actual
   credentials.

   Example `.env` file:
   ```env
   RESEND_API_KEY=your-resend-api-key
   RESEND_RECEIVER_EMAIL=owner@timelessview.ca
   RESEND_FROM_DOMAIN=no-reply@timelessview.ca
   STRIPE_SECRET_KEY=sk_live_your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_stripe_publishable_key
   BASE_URL=https://timelessview.ca
   NEXT_PUBLIC_API_URL=https://timelessview.ca/api