import pytesseract
from PIL import Image
import re
import cv2

# Configure pytesseract to use Tesseract OCR
pytesseract.pytesseract.tesseract_cmd = r"/usr/bin/tesseract"  # Update this path for your OS

# Helper function to extract details
def extract_device_details(image_path):
    # Load image
    image = cv2.imread(image_path)
    
    # Preprocess image for better OCR results
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    _, threshold_img = cv2.threshold(gray, 120, 255, cv2.THRESH_BINARY)
    
    # Perform OCR
    text = pytesseract.image_to_string(threshold_img)
    
    # Define regex patterns for essential details
    patterns = {
        "Batch Number": r"(?i)\b(batch|lot)[:\- ]?([A-Za-z0-9\-]+)",
        "Expiry Date": r"(?i)\b(expiry|exp)[:\- ]?(date[:\- ]?)?([0-9]{2}/[0-9]{2}/[0-9]{4}|[0-9]{2}-[0-9]{2}-[0-9]{4})",
        "Manufacturer": r"(?i)\bmanufacturer[:\- ]?([\w\s,]+)",
        "Device Name": r"(?i)\bdevice[:\- ]?name[:\- ]?([\w\s]+)",
        "Price": r"(?i)\bprice[:\- ]?(\$?[0-9,.]+)"
    }
    
    # Extract details using regex
    extracted_details = {}
    for key, pattern in patterns.items():
        match = re.search(pattern, text)
        if match:
            extracted_details[key] = match.groups()[-1].strip()
    
    return extracted_details

# Test the function
if __name__ == "__main__":
    image_path = "device_label.png"  # Replace with your device label image path
    details = extract_device_details(image_path)
    
    print("Extracted Details:")
    for key, value in details.items():
        print(f"{key}: {value}")
