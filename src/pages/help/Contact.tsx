import { ActionFunctionArgs, Form, redirect, useActionData } from 'react-router-dom';

export default function Contact() {
  const data = useActionData() as { error: string };

  return (
    <div className='contact'>
      <h3>Contact Us</h3>
      <Form method='post' action='/help/contact'>
        <label>
          <span>Your email:</span>
          <input type='email' name='email' required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name='message' required></textarea>
        </label>
        <button>Submit</button>

        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  );
}

export async function contactAction({ request }: ActionFunctionArgs) {
  console.log(request);
  const data = await request.formData();

  const payload = {
    email: data.get('email'),
    message: data.get('message'),
  };

  console.log(payload);

  if (payload.message && payload.message.toString().length < 10) {
    return { error: 'Message must be longer than 10 chars long' };
  } else {
    return redirect('/help/contact');
  }
}
