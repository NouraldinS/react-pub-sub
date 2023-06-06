import { useEffect } from 'react';
import { EventEmitter } from 'eventemitter3';

type EventCallback<T> = (data: T) => void;

const emitter = new EventEmitter();

const usePubSub = <T>() => {

  const subscribe = (event: string, callback: EventCallback<T>) => {
    emitter.on(event, callback);
  };

  const unsubscribe = (event: string, callback: EventCallback<T>) => {
    emitter.off(event, callback);
  };

  const publish = (event: string, data: T) => {
    emitter.emit(event, data);
  };

  useEffect(() => {
    return () => {
      // Clear event listeners on component unmount
      emitter.removeAllListeners();
    };
  }, []);

  return { subscribe, unsubscribe, publish };
};

export const useSub = <T>(event: string, callback: EventCallback<T>) => {
  const unsubscribe = () => {emitter.off(event, callback);}

  useEffect(() => {
    emitter.on(event, callback);
    return unsubscribe;
  }, []);

  return unsubscribe;
}

export const usePub = <T>() => {
  return (event: string, data?: T) => emitter.emit(event, data);
}

export default usePubSub;
