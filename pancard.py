from skimage.metrics import structural_similarity
import imutils
import cv2
from PIL import Image
import requests

og = cv2.imread(r"C:\Users\ARYAN\Desktop\loc\backend\static\submitted\original.jpg")
tampered = cv2.imread(r"C:\Users\ARYAN\Desktop\loc\backend\static\submitted\tampered.png")
tampered_gray = cv2.cvtColor(tampered, cv2.COLOR_BGR2GRAY)
original_gray = cv2.cvtColor(og, cv2.COLOR_BGR2GRAY)

class Tam:
  def tampered(self,original_gray,tampered_gray):
    (score, diff) = structural_similarity(original_gray, tampered_gray, full=True)
    diff = (diff * 255).astype("uint8")
    accept = "The given pan card is original"
    reject = "The given pan card is tampered"
    if score >= 80:
      return accept
    else:
      return reject
 

# x = tampered(original_gray,tampered_gray)
# print(x)
