"use server";

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const getAuthStatus = async () => {
  const supabase = createServerComponentClient({ cookies });

  try {
    const { data: { session }, error } = await supabase.auth.getSession();

    if (error) {
      return { error: 'Authentication failed' };
    }

    if (!session?.user) {
      return { error: 'No user found' };
    }

    return { success: true };
  } catch (error) {
    return { error: 'Server error' };
  }
};

export default getAuthStatus;
