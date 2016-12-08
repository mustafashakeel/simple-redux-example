#pragma once

// Incude libraries for srand, time, and rand functions.
#include <iostream>
#include <ctime>

namespace Lotto {

	using namespace System;
	using namespace System::ComponentModel;
	using namespace System::Collections;
	using namespace System::Windows::Forms;
	using namespace System::Data;
	using namespace System::Drawing;

	/// <summary>
	/// Summary for Form1
	///
	/// WARNING: If you change the name of this class, you will need to change the
	///          'Resource File Name' property for the managed resource compiler tool
	///          associated with all .resx files this class depends on.  Otherwise,
	///          the designers will not be able to interact properly with localized
	///          resources associated with this form.
	/// </summary>
	public ref class Form1 : public System::Windows::Forms::Form
	{
	public:
		Form1(void)
		{
			InitializeComponent();
			//
			//TODO: Add the constructor code here
			//
		}

	protected:
		/// <summary>
		/// Clean up any resources being used.
		/// </summary>
		~Form1()
		{
			if (components)
			{
				delete components;
			}
		}
	private: System::Windows::Forms::Label^  label1; 
	private: System::Windows::Forms::Label^  label2;
	private: System::Windows::Forms::Label^  label3;
	private: System::Windows::Forms::Label^  label4;
	private: System::Windows::Forms::Label^  label5;
	private: System::Windows::Forms::Label^  label6;
	private: System::Windows::Forms::Button^  getBtn;
	private: System::Windows::Forms::Button^  resetBtn;
	private: System::Windows::Forms::PictureBox^  pictureBox1;

	private:
		/// <summary>
		/// Required designer variable.
		/// </summary>
		System::ComponentModel::Container ^components;

#pragma region Windows Form Designer generated code
		/// <summary>
		/// Required method for Designer support - do not modify
		/// the contents of this method with the code editor.
		/// </summary>
		void InitializeComponent(void)
		{
			System::ComponentModel::ComponentResourceManager^  resources = (gcnew System::ComponentModel::ComponentResourceManager(Form1::typeid));
			this->label1 = (gcnew System::Windows::Forms::Label());
			this->label2 = (gcnew System::Windows::Forms::Label());
			this->label3 = (gcnew System::Windows::Forms::Label());
			this->label4 = (gcnew System::Windows::Forms::Label());
			this->label5 = (gcnew System::Windows::Forms::Label());
			this->label6 = (gcnew System::Windows::Forms::Label());
			this->getBtn = (gcnew System::Windows::Forms::Button());
			this->resetBtn = (gcnew System::Windows::Forms::Button());
			this->pictureBox1 = (gcnew System::Windows::Forms::PictureBox());
			(cli::safe_cast<System::ComponentModel::ISupportInitialize^  >(this->pictureBox1))->BeginInit();
			this->SuspendLayout();
			// 
			// label1
			// 
			this->label1->AutoSize = true;
			this->label1->Location = System::Drawing::Point(103, 22);
			this->label1->Name = L"label1";
			this->label1->Size = System::Drawing::Size(35, 13);
			this->label1->TabIndex = 0;
			this->label1->Text = L"label1";
			// 
			// label2
			// 
			this->label2->AutoSize = true;
			this->label2->Location = System::Drawing::Point(143, 22);
			this->label2->Name = L"label2";
			this->label2->Size = System::Drawing::Size(35, 13);
			this->label2->TabIndex = 1;
			this->label2->Text = L"label2";
			// 
			// label3
			// 
			this->label3->AutoSize = true;
			this->label3->Location = System::Drawing::Point(183, 22);
			this->label3->Name = L"label3";
			this->label3->Size = System::Drawing::Size(35, 13);
			this->label3->TabIndex = 2;
			this->label3->Text = L"label3";
			// 
			// label4
			// 
			this->label4->AutoSize = true;
			this->label4->Location = System::Drawing::Point(223, 22);
			this->label4->Name = L"label4";
			this->label4->Size = System::Drawing::Size(35, 13);
			this->label4->TabIndex = 3;
			this->label4->Text = L"label4";
			// 
			// label5
			// 
			this->label5->AutoSize = true;
			this->label5->Location = System::Drawing::Point(263, 22);
			this->label5->Name = L"label5";
			this->label5->Size = System::Drawing::Size(35, 13);
			this->label5->TabIndex = 4;
			this->label5->Text = L"label5";
			// 
			// label6
			// 
			this->label6->AutoSize = true;
			this->label6->Location = System::Drawing::Point(303, 22);
			this->label6->Name = L"label6";
			this->label6->Size = System::Drawing::Size(35, 13);
			this->label6->TabIndex = 5;
			this->label6->Text = L"label6";
			// 
			// getBtn
			// 
			this->getBtn->AutoSize = true;
			this->getBtn->Location = System::Drawing::Point(106, 54);
			this->getBtn->Name = L"getBtn";
			this->getBtn->Size = System::Drawing::Size(143, 23);
			this->getBtn->TabIndex = 6;
			this->getBtn->Text = L"Get My Lucky Numbers";
			this->getBtn->UseVisualStyleBackColor = true;
			this->getBtn->Click += gcnew System::EventHandler(this, &Form1::getBtn_Click);
			// 
			// resetBtn
			// 
			this->resetBtn->Location = System::Drawing::Point(264, 54);
			this->resetBtn->Name = L"resetBtn";
			this->resetBtn->Size = System::Drawing::Size(75, 23);
			this->resetBtn->TabIndex = 7;
			this->resetBtn->Text = L"Reset";
			this->resetBtn->UseVisualStyleBackColor = true;
			this->resetBtn->Click += gcnew System::EventHandler(this, &Form1::resetBtn_Click);
			// 
			// pictureBox1
			// 
			this->pictureBox1->Image = (cli::safe_cast<System::Drawing::Image^  >(resources->GetObject(L"pictureBox1.Image")));
			this->pictureBox1->Location = System::Drawing::Point(0, 0);
			this->pictureBox1->Margin = System::Windows::Forms::Padding(0);
			this->pictureBox1->Name = L"pictureBox1";
			this->pictureBox1->Size = System::Drawing::Size(92, 95);
			this->pictureBox1->SizeMode = System::Windows::Forms::PictureBoxSizeMode::AutoSize;
			this->pictureBox1->TabIndex = 8;
			this->pictureBox1->TabStop = false;
			this->pictureBox1->Click += gcnew System::EventHandler(this, &Form1::pictureBox1_Click);
			// 
			// Form1
			// 
			this->AutoScaleDimensions = System::Drawing::SizeF(6, 13);
			this->AutoScaleMode = System::Windows::Forms::AutoScaleMode::Font;
			this->BackColor = System::Drawing::SystemColors::Control;
			this->ClientSize = System::Drawing::Size(356, 92);
			this->Controls->Add(this->pictureBox1);
			this->Controls->Add(this->resetBtn);
			this->Controls->Add(this->getBtn);
			this->Controls->Add(this->label6);
			this->Controls->Add(this->label5);
			this->Controls->Add(this->label4);
			this->Controls->Add(this->label3);
			this->Controls->Add(this->label2);
			this->Controls->Add(this->label1);
			this->MaximizeBox = false;
			this->MaximumSize = System::Drawing::Size(372, 128);
			this->MinimumSize = System::Drawing::Size(372, 128);
			this->Name = L"Form1";
			this->Text = L"Lotto Number Generator";
			this->Load += gcnew System::EventHandler(this, &Form1::Form1_Load);
			(cli::safe_cast<System::ComponentModel::ISupportInitialize^  >(this->pictureBox1))->EndInit();
			this->ResumeLayout(false);
			this->PerformLayout();

		}
#pragma endregion
	private: System::Void pictureBox1_Click(System::Object^  sender, System::EventArgs^  e) {
			 }


		// ***********************************************************
		// Statements in the following functions are manual additions.
		// (Also see #include directives at the start of this program).

		private: System::Void Form1_Load(System::Object^  sender, System::EventArgs^  e) 
		{
			// Set the initial button states and label values.
			Clear() ;

			// Start the random number generator.
			srand( ( int ) time( 0 ) ) ;
		}

		private: System::Void Clear()
		{
			// Set all label values to an ellipsis.
			this->label1->Text = "..." ; 
			this->label2->Text = "..." ;
			this->label3->Text = "..." ;
			this->label4->Text = "..." ;
			this->label5->Text = "..." ;
			this->label6->Text = "..." ;

			// Set the button states to "Ready".
			this->getBtn->Enabled = true ;
			this->resetBtn->Enabled = false ;
		}

		private: System::Void getBtn_Click
					 (System::Object^  sender, System::EventArgs^  e) 
		{
			// Declare trivial variables and integer array.
			int i , j , k, nums[50] ;

			// Fill elements 1-49 with integers 1-49	
			for(i=1; i<50;i++) nums[i] = i ;
			
			// Randomize the values in array elements 1-49.
			for(i=1; i<50;i++)
			{
				j = ( rand() % 49 ) + 1 ;
				k = nums[i] ; nums[i]=nums[j] ; nums[j] = k ;
			} 
			
			// Output the values in array elements 1-6.
			this->label1->Text = Convert::ToString( nums[1] ) ;
			this->label2->Text = Convert::ToString( nums[2] ) ;
			this->label3->Text = Convert::ToString( nums[3] ) ;
			this->label4->Text = Convert::ToString( nums[4] ) ;
			this->label5->Text = Convert::ToString( nums[5] ) ;
			this->label6->Text = Convert::ToString( nums[6] ) ;
			
			// Set the button states to "Done".
			this->getBtn->Enabled = false;
			this->resetBtn->Enabled = true ;
		 }

		private: System::Void resetBtn_Click(System::Object^  sender, System::EventArgs^  e) 
		{
			// Reset the button states and label values.		
			Clear() ;
		}
};
}

