<h1>Welcome To DSA Learning</h1>

<h4>Here is the all chapter that we will learn in this docs</h4>

<ul>
    <li>Big O Notation</li>
</ul>

</br>

<h2>Big O Notation</h2>
> Big-O notation হচ্ছে আমাদের কোনো একটা function এর ইনপুট বাড়ার সাথে সাথে কতটা টাইম কমপ্লেক্সিটি ও কতটা স্পেস কমপ্লেক্সিটি হচ্ছে সেটা নির্ণয় করা।
</br>

> Big-O notation এর মাধ্যমে আমাদের প্রতিনিয়ত ব্যবহৃত কয়েকটা জাভাস্কিপ্ট মেথত এর টাইম কমপ্লেসিটি ও স্পেস কমপ্লেসিটি নির্ণয় করি

<ul>
    <h2>Object</h2>
    <li>Object.keys - <b>Big O(n)</b> <p>( এটায় Big O(n) কারণ একটি object এ অনেক keys তাকতে পারে এটা বলা মুশকিল যে ওই object এর মধ্যে মোট কতটি entries তাকবে, তাই আমরা ধরে নিলাম যে একটা n ইনপুটে থাকবে এবং সেই n এ যত ইচ্ছা দেওয়া হবে তাই এটা n এর উপর ডিপেন্ডেড এবং এর জন্যই এটা Big O(n) )</p>
    </li>
    <li>Object.entries - <b>Big O(n)</b>
    <p>( same as object.keys )</p>
    </li>
    <li>Object.values - <b>Big O(n)</b><p>( same as object.keys )</p></li>
    <li>Object.hasOwnProperty - <b>Big O(1)</b>
    <p>( এটায় Big O(1) কারণ আমরা যখন কোনো property সার্চ করবো তখন তো আমরা একটা value ই পাবো এবং এর জন্যই এটা Big O(1) )</p>
    </li>
</ul>

<ul>
    <h2>Array</h2>
    <li>push, pop - <b>Big O(1)</b>
    <p>( এটায় Big O(1) কারণ একটি array তে আমরা যখন push or pop এর মাধ্যমে কোনো element যুক্ত করি তখন সেই element টি ওই array এর শেষের দিকে যুক্ত হয় অথবা ডিলিট হয়, যার জন্য কোনো element এর ইনডেক্স পরিবর্তন করতে হয় না এবং এর জন্যই এটা Big O(1) )</p>
    </li>
    <li>shift, unshift - <b>Big O(n)</b>
    <p>( এটায় Big O(n) কারণ একটি array তে আমরা যখন shift or unshift এর মাধ্যমে কোনো element যুক্ত করি তখন সেই element টি ওই array এর শুরুর দিকে যুক্ত হয় অথবা ডিলিট হয়, যার জন্য আগের element দের ইনডেক্স পরিবর্তন করতে হয়। তাই এখানে n বার নতুন element যুক্ত হতে পারে যার জন্যই এটা Big O(n) )</p>
    </li>
    <li>search - <b>Big O(n)</b>
    <p>( এটায় Big O(n) কারণ একটি array তে কতগুলো value তাকবে তা বলা যাবে না এবং আমরা যদি ওই array তে কোনো কিছু search করি তাহলে আমাদের ওই array তে থাকা প্রতিটি element এর মধ্যে দিয়ে খুজতে হবে আমাদের কাংকিত element টিকে এবং সেটা n তম বার ও হতে পারে যার জন্যই এটা Big O(n) )</p>
    </li>
    <li>access - <b>Big O(1)</b>
    <p>( এটায় Big O(1) কারণ একটি array থেকে আমরা যখন কোনো একটা element access করতে চাই তার index এর মাধ্যমে তখন কিন্তু আমরা সরাসরি ওই element টাকে access করতে পারি এবং সেটা একটি element হয় যার জন্যই এটা Big O(1) )</p>
    </li>
</ul>
