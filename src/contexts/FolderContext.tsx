import React, { createContext, useState, useContext } from 'react';
import { Folder } from '../types';

interface FolderContextData {
  folders: Folder[];
  addFolder: (name: string) => void;
  deleteFolder: (id: number) => void;
  addFile: (folderId: number, fileName: string) => void;
  deleteFile: (folderId: number, fileId: number) => void;
}

const FolderContext = createContext<FolderContextData>({} as FolderContextData);

export const FolderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [folders, setFolders] = useState<Folder[]>([]);

  const addFolder = (name: string) => {
    const newFolder: Folder = {
      id: Math.random(), // In a real app, use a proper ID generation
      name,
      files: []
    };
    setFolders([...folders, newFolder]);
  };

  const deleteFolder = (id: number) => {
    setFolders(folders.filter(folder => folder.id !== id));
  };

  const addFile = (folderId: number, fileName: string) => {
    setFolders(folders.map(folder => {
      if (folder.id === folderId) {
        return {
          ...folder,
          files: [...folder.files, {
            id: Math.random(), // In a real app, use a proper ID generation
            name: fileName,
            transactions: []
          }]
        };
      }
      return folder;
    }));
  };

  const deleteFile = (folderId: number, fileId: number) => {
    setFolders(folders.map(folder => {
      if (folder.id === folderId) {
        return {
          ...folder,
          files: folder.files.filter(file => file.id !== fileId)
        };
      }
      return folder;
    }));
  };

  return (
    <FolderContext.Provider value={{
      folders,
      addFolder,
      deleteFolder,
      addFile,
      deleteFile
    }}>
      {children}
    </FolderContext.Provider>
  );
};

export const useFolders = () => useContext(FolderContext);