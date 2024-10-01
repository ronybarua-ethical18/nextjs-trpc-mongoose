import { useState } from 'react';
import { trpc } from '@/utils/trpc';

export function CreateUserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const createUserMutation = trpc.createUser.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newUser = await createUserMutation.mutateAsync({ name, email });
      console.log('User created:', newUser);
      // Reset form or show success message
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Error creating user:', error);
      // Show error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <button type="submit" disabled={createUserMutation.isLoading}>
        {createUserMutation.isLoading ? 'Creating...' : 'Create User'}
      </button>
    </form>
  );
}