import os
from PIL import Image
from torch.utils.data import Dataset
import numpy as np
from torchvision import transforms

class CarvanaDataset(Dataset):
    def __init__(self, size, image_dir, transform=None):
        self.image_dir = image_dir
        self.size = size
        self.transform = transform
        self.images = os.listdir(image_dir)

    def __len__(self):
        return len(self.images)

    def __getitem__(self, index):
        img_path = os.path.join(self.image_dir, self.images[index])
        image = Image.open(img_path).convert("RGB")

        area1 = (0, 0, self.size, self.size)
        area2 = (self.size, 0, 2*self.size, self.size)
        
        mask = np.array(image.crop(area2))
        image = np.array(image.crop(area1))

        image = transforms.Compose([transforms.ToTensor()])(image)
        mask = transforms.Compose([transforms.ToTensor()])(mask)

        return image, mask

