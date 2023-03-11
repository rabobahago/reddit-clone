import {
  communityState,
  Community,
  CommunitySnippet,
} from "@/atoms/communitiesAtom";
import Communities from "@/components/Navbar/directory/Communities";
import { auth, firestore } from "@/firebase/clientApp";
import {
  collection,
  doc,
  getDocs,
  increment,
  writeBatch,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";

const useCommunityData = () => {
  const [user] = useAuthState(auth);
  const [communityStateValue, setCommunityStateValue] =
    useRecoilState(communityState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const onJoinOrLeaveCommunity = (
    communityData: Community,
    isJoined: boolean
  ) => {
    // user sign in
    // if not open the modal
    if (isJoined) {
      leaveCommunity(communityData.id);
      return;
    }
    joinCommunity(communityData);
  };
  const getMySnippets = async () => {
    setLoading(true);
    try {
      //get snippets
      const snippetDocs = await getDocs(
        collection(firestore, `users/${user?.uid}/communitySnippets`)
      );
      const snippets = snippetDocs.docs.map((doc) => ({ ...doc.data() }));
      setCommunityStateValue((prev) => ({
        ...prev,
        mySnippets: snippets as CommunitySnippet[],
      }));
    } catch (error: any) {
      console.log("getMySnippets Error", error);
      setError(error.message);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (!user) return;
    getMySnippets();
  }, [user]);
  const joinCommunity = async (communityData: Community) => {
    try {
      const batch = writeBatch(firestore);
      const newSnippets: CommunitySnippet = {
        communityId: communityData.id,
        imageURL: communityData.imageURL || "",
      };
      batch.set(
        doc(
          firestore,
          `users/${user?.uid}/communitySnippets`,
          communityData.id
        ),
        newSnippets
      );
      batch.update(doc(firestore, "communities", communityData.id), {
        numberOfMembers: increment(1),
      });
      await batch.commit();
      setCommunityStateValue((prev) => ({
        ...prev,
        mySnippets: [...prev.mySnippets, newSnippets],
      }));
    } catch (error: any) {
      console.log("joinCommunityError", error);
      setError(error.message);
    }
    setLoading(false);
  };
  const leaveCommunity = (communityId: string) => {};

  return {
    communityStateValue,
    onJoinOrLeaveCommunity,
    loading,
  };
};
export default useCommunityData;
