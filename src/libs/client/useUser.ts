import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

//const fetcher = (url: string) => fetch(url).then((response) => response.json());

export default function useUser() {
  //const [user, setUser] = useState();
  const { data, error } = useSWR("/api/users/me");
  const router = useRouter();

  /* useEffect(() => {
    fetch("/api/users/me")
      .then((response) => response.json())
      .then((data) => {
        if (!data.ok) {
          return router.replace("/enter");
        }
        setUser(data.profile);
      });
  }, [router]); */

  useEffect(() => {
    if (data && !data.ok) {
      router.replace("/enter");
    }
  }, [data, router]);

  return { user: data?.profile, isLoading: !data && !error };
}
