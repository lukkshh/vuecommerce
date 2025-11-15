import { ref, onMounted } from "vue";

export interface Notification {
  message: string;
  viewed: boolean;
  date: string;
}

const STORAGE_KEY = "globalNotification";

const loadLocal = (): Notification | null => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
};

const saveLocal = (data: Notification) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

const isNewer = (d1: string, d2: string) => {
  return new Date(d1) > new Date(d2);
};

const fetchRemote = async () => {
  const res = await fetch("/api/globalNotification.json");
  return (await res.json()) as Notification;
};

export const useGlobalNotification = () => {
  const notification = ref<Notification>({
    message: "",
    viewed: true,
    date: new Date().toISOString(),
  });

  const markAsViewed = () => {
    notification.value.viewed = true;
    saveLocal(notification.value);
  };

  onMounted(async () => {
    const local = loadLocal();
    const remote = await fetchRemote();

    if (!local || isNewer(remote.date, local.date)) {
      notification.value = remote;
      saveLocal(remote);
      return;
    }

    notification.value = local;
  });

  return {
    notification,
    markAsViewed,
  };
};
