//on branch experiment
#include <iostream>
#include <fstream>
#include <complex>
#include <vector>
#include <cmath>
#include <utility>

using namespace std;
const double PI = 3.14159265358979323846;

vector<pair<double, double>> dtft(vector<double> x)
{
	int cycles = 3;
	vector<pair<double, double>> X;
	int N = x.size();
	cout << N << endl;
	int k = -cycles * N;
	while (k < (cycles * N))
	{
		double re = 0;
		double im = 0;
		for (int n = 0; n < N; n++)
		{
			const double phi = 2 * PI * k * n / N;
			re += x[n] * cos(phi);
			im -= x[n] * sin(phi);
		}
		pair<double, double> temp;
		double mag = sqrt(re * re + im * im);
		temp.first = mag;
		temp.second = 0;
		X.push_back(temp);
		k++;
	}
	return X;
}

int main()
{
	vector<double> x;
	/*int number;
	ifstream file("signal.txt");
	if (file.is_open()) {
		while (file >> number) {
			x.push_back(number);
		}

		file.close();
		std::cout << "Data from file:" << std::endl;
		for (const int& num : x) {
			std::cout << num << " ";
		}
	}
	else {
		std::cerr << "Unable to open file." << std::endl;
	}*/

	x = {
		
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 01, 01, 01, 01, 01, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
	};

	vector<pair<double, double>> X = dtft(x);
	ofstream outFile("dft_result.txt");
	for (int i = 0; i < X.size(); i++)
	{
		outFile << X[i].first << "\n";
	}
	outFile.close();
	return 0;
}
