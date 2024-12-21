import requests
from bs4 import BeautifulSoup
from datetime import datetime

# URL of the CDSCO Product Recall page
url = "https://cdsco.gov.in/opencms/opencms/en/consumer/Product-Recall/"

try:
    # Fetch the webpage content
    response = requests.get(url)
    response.raise_for_status()  # Ensure the request was successful

    # Parse the HTML content
    soup = BeautifulSoup(response.text, 'html.parser')

    # Locate the table containing recall information
    recall_table = soup.find('table')

    if recall_table:
        # Find all rows in the table
        rows = recall_table.find_all('tr')[1:]  # Skip the header row

        if rows:
            # Extract details from the first row (most recent recall)
            first_row = rows[0]
            cols = first_row.find_all('td')

            recall_title = cols[1].get_text(strip=True)
            release_date = cols[2].get_text(strip=True)
            pdf_link = cols[3].find('a')['href']

            # Convert release date to datetime object
            release_date_dt = datetime.strptime(release_date, '%d/%m/%Y')

            # Display the most recent recall information
            print(f"Title: {recall_title}")
            print(f"Release Date: {release_date_dt.strftime('%B %d, %Y')}")
            print(f"PDF Link: {pdf_link}")
        else:
            print("No recall entries found in the table.")
    else:
        print("Recall table not found on the webpage.")

except requests.exceptions.RequestException as e:
    print(f"Error fetching the webpage: {e}")
except Exception as e:
    print(f"An error occurred: {e}")
